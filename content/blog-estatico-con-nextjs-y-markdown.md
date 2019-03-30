---
title: Cómo crear un blog estático con Next.js y Markdown
slug: blog-con-nextjs-y-markdown
date: '2019-04-01'
updatedDate: '2019-04-01'
readTime: 120000
topic: nextjs
---

Next.js tiene una funcionalidad muy interesante, llamada **static rendering**, que se centra en la idea de compilar la web y obtener archivos estáticos que se servirán directamente sin que se tenga que ejecutar ningún código en servidor.

## Utilizar Markdown para el contenido de los posts

Primero tenemos que tener en cuenta que el nombre del archivo `.md` debe coincidir con el _slug_ que queramos tener en la url. Por ejemplo, el _slug_ de este post es "blog-con-nextjs-y-markdown", por lo tanto el archivo Markdown del post se debe llamar `blog-con-nextjs-y-markdown.md`.

Una vez hecho esto, creamos una carpeta donde irán todos los posts y procedemos a importarlos en el método `getInitialProps` utilizando la función `require`.

> El método `getInitialProps` se ejecuta en el lado del servidor y se utiliza para obtener los datos necesarios para el renderizado de la página. El objeto que devuelve lo recibirá el componente de la página vía `props`.

Una vez hecho esto necesitamos convertir Markdown a html, en mi caso he utilizado `react-markdown` para ello.

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

En éste ejemplo podéis ver cómo he utilizado `gray-matter` para obtener los metadatos del archivo Markdown que defino al inicio de éste. Podréis ver más ejemplos en el [repositorio de ésta web](https://github.com/rmoralp/rm-web).

## ¿Cómo listar los posts?

## Generación automática de las rutas y exportación a archivos estáticos

## Aspectos a tener en cuenta

A continuación os detallo algunos puntos interesantes a tener en cuenta.

- Next.js exportará a una velocidad de 25 páginas por segundo. En base a un MacBook con 4 cores de CPU.