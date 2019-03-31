---
title: Cómo crear un blog estático con Next.js y Markdown
slug: blog-estatico-con-nextjs-y-markdown
date: '2019-03-31'
updatedDate: '2019-03-31'
readTime: 120000
topic: nextjs
---

Next.js tiene una funcionalidad muy interesante, llamada **static rendering**, que se centra en la idea de compilar la web y obtener archivos estáticos que se servirán directamente sin tener que ejecutar ningún código en servidor.

> Next.js exportará a una velocidad de 25 páginas por segundo. En base a un MacBook con 4 cores de CPU.

Los procedimientos explicados en este post se estan utilizando en esta misma página web, la cual es de código abierto, y podéis [entrar a consultar en el repositorio de ésta](https://github.com/rmoralp/rm-web).

## Cómo utilizar Markdown para el contenido de los posts

Primero tenemos que tener en cuenta que el nombre del archivo `{post-name}.md` debe coincidir con el _slug_ que queramos tener en la url. Por ejemplo, el _slug_ de este post es "blog-estatico-con-nextjs-y-markdown", por lo tanto el archivo Markdown del post será `blog-estatico-con-nextjs-y-markdown.md`. Una vez hecho esto, creamos una carpeta donde se pondrán todos los posts.

A continuación, se debe crear una página para los posts, como por ejemplo `./pages/post.js`. En ésta página, procedemos a importar el contenido del post que se quiera visualizar mediante el método `getInitialProps` y utilizando la función `require`.

> El método `getInitialProps` se ejecuta en el lado del servidor y se utiliza para obtener los datos necesarios para el renderizado de la página. El objeto que devuelve lo recibirá el componente de la página vía `props`.

Una vez hecho esto necesitamos convertir el contenido Markdown a html, utilizado `react-markdown` por ejemplo.

```javascript
import React, {useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import Error from '../_error'

const Post = ({content, data}) => {
  if (!content) return <Error statusCode={404} />

  return (
    <>
      <h1>{data.title}</h1>
      <ReactMarkdown source={content} escapeHtml={false} />
    </>
  )
}

Post.getInitialProps = async ({query}) => {
  const {slug} = query

  try {
    const content = await require(`../../content/${slug}.md`)
    const document = matter(content.default)

    return {
      ...document
    }
  } catch (error) {
    return {error}
  }
}

export default Post
```

Aquí, se ha utilizado la librería `gray-matter` para obtener los metadatos del archivo Markdown del post. A modo resumen, indicar que los metadatos se definen en el inicio del fichero Markdown, deben tener formato `YAML` y se puede añadir tanta información como sea necesaria.

## ¿Cómo listar los posts?

El listado de posts se carga de la misma forma que el contenido de un post, con la diferencia de que en esta ocasión se obtiene de un fichero `.json` en vez de un Markdown. Los requisitos mínimos que debe contener para cada post son el _title_ y _slug_ aunque podemos añadir toda la información que necesitemos en la UI. Un ejemplo del formato podría ser éste:

```json
{
  "list": [
    {
      "title": "Cómo crear un blog estático con Next.js y Markdown",
      "slug": "blog-estatico-con-nextjs-y-markdown",
      "date": "2019-04-01",
      "updatedDate": "2019-04-01",
      "readTime": "120000",
      "topic": "nextjs"
    }
  ]
}
```

Para evitar procesos manuales, el archivo puede ser generado con un pequeño script que obtenga los metadatos de los archivos Markdown de posts y los utilize para generarlo. En el repositorio, el archivo `./bin/generateIndex.js` puede servir como ejemplo de cómo hacerlo.

## Generación automática de las rutas y exportación a archivos estáticos

Para poder exportar la web a páginas estáticas en HTML, debemos **definir las rutas de las páginas en el archivo `next.config.js`** de la siguiente forma:

```javascript
module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      '/blog/blog-estatico-con-nextjs-y-markdown': {
        page: '/blog',
        query: {slug: 'blog-estatico-con-nextjs-y-markdown'}
      }
    }
  }
}
```

Si tenemos una gran cantidad de posts, no es óptimo hacerlo manualmente, por eso, es preferible aprovechar el `.json` utilizado para listar los posts para generar las rutas. Se podría hacer de la siguiente manera: 

Archivo `routes.js`:

```javascript
const blogIndex = require('./content/index.json')

const staticRoutes = {
  '/': {page: '/'},
  '/blog': {page: '/blog'}
}

function withBlogRoutes(staticRoutes = {}) {
  let routes = {
    ...staticRoutes
  }

  blogIndex.list.forEach(post => {
    const file = `/blog/${post.slug}`

    routes[file] = {
      page: '/blog',
      query: {slug: post.slug}
    }
  })

  return routes
}

module.exports = withBlogRoutes(staticRoutes)
```

En el `next.config.js`:

```javascript
const routes = require('./routes.js')

const nextConfig = {
  exportPathMap: () => routes,
  webpack: config => {
    config.node = {
      fs: 'empty'
    }

    return config
  }
}

module.exports = nextConfig
```

Una vez hecho esto, podemos crear el build y exportar la web a HTML estático con siguientes comandos:

```
npm run build
npm run export
```

El código resultante estará en un directorio llamado "out" dentro de tu proyecto.

¡Ahora sólo quedará publicar tu web en cualquier hosting estático!
