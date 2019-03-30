---
title: Genera un sprite con tu librería de iconos SVG
slug: genera-sprite-libreria-iconos-svg
date: '2019-02-24'
updatedDate: '2019-02-24'
readTime: 120000
topic: tools
---

> Muchos proyectos, que requieren de un set de iconos bastante estándar, utilizan **Font Awesome**, uno de los set de iconos más populares. Otros proyectos, que tienen la necesidad de tener algunos iconos propios en combinación con los que tenga la libreria, utilizan **Icomoon**, una herramienta que permite combinar iconos propios y de terceros. En este artículo os hablaré de la posibilidad de tener un set de iconos propio de una manera muy sencilla con **_[la herramienta easy-svg-sprite](https://github.com/rmoralp/easy-svg-sprite)_**

## Qué es Easy SVG Sprite?

Este paquete NPM está pensado en generar, de forma automática, un Sprite en SVG a partir de un conjunto de iconos existentes en una carpeta. Por si fuera poco, durante el proceso, optimiza uno a uno el código de todos los SVG antes de generar el Sprite.

## Cómo se utiliza?

Muy fácil, lo primero es intalar el paquete:

```
npm install easy-svg-sprite
```

Una vez instalado, puedes ejecutar el script de la siguiente:

```
easy-sprite
```

Este comandó buscará todos los iconos en SVG del directorio `./icons` y una vez optimizados generará el sprite en `./`

En caso de querer indicar el directorio donde se encuentran los iconos o el lugar dónde se tiene que generar el sprite, se puede hacer de la siguiente manera:

```
easy-sprite -I ./files -O ./dist
```

Finalmente, hay que tener en cuenta que la libreria, utiliza el prefijo `icon-` con el nombre del fichero de cada SVG para dar nombre a cada icono del sprite.
Ejemplo: para utilizar el icono del sprite que hace referencia al archivo arrow-down.svg se utilizará el nombre `icon-arrow-down`

## Cómo utilizar un icono en mi web?

Muy sencillo, te dejo dos ejemplos:

```html
<svg xmlns="http://www.w3.org/2000/svg" role="img">
  <use xlink:href="ess-sprite.svg#icon-arrow-down" />
</svg>
```

o

```html
<img src="ess-sprite.svg#icon-arrow-down" />
```

## Y recuerda...

No dudes en reportar cualquier incidencia, sugerencia o mejora en [la página de easy-svg-sprite en Github](https://github.com/rmoralp/easy-svg-sprite/issues)
