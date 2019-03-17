---
title: Elipsis multilínea con CSS
slug: elipsis-multilinea-css
date: '2019-03-17'
updatedDate: '2019-03-17'
readTime: 120000
topic: sass
---

> Es habitual que os pidan que cierto contenido en Desktop se muestre entero, pero en cambio en Mobile esté elipsado a `x` líneas. Quizás incluso con un "ver más" que sirva para quitar la elipsis y mostrarlo entero. A continuación os explico cómo lo he solucionado con unas cuantas líneas de CSS.

## Elipsis de una línea

Elipsar un texto a una única línea es muy sencillo, con 3 líneas de código es suficiente:

```css
  .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
```

La cosa se complica cuando queremos hacer una elipsis a más de una línea.

## Elipsis multilínea

Con este mixin de Sass, podéis elipsar cualquier bloque de texto a las líneas que necesitéis.

En el caso de que el número de líneas sea mayor a lo que realmente ocupa el texto, no os preocupéis, el texto se verá en su totalidad sin ningún efecto.

```scss
@mixin ellipsis-multiline($font-size, $line-height, $lines-to-show, $margin:"0") {
  $height-calc: $font-size*$line-height*$lines-to-show;
  display: block;
  display: -webkit-box;
  font-size: $font-size*1px;
  line-height: $line-height;
  max-height: ($height-calc + $margin)*1px;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  -webkit-line-clamp: $lines-to-show;
  -webkit-box-orient: vertical;

  p:not(:first-of-type) {
    display: none;
  }
}
```

Las variables que acepta como parámetros són:

- `font-size` - tamaño de la fuente
- `line-height` - interlineado
- `lines-to-show` - líneas a mostrar
- `margin` - espaciado interior vertical

El `margin` por defecto es 0, en el caso de que le añadas este css a un elemento que contiene diferentes parágrafos en su interior, deberás especificar el margen vertical del primer elemento en caso de que no sea 0.

Con estas variables, el mixin calcula el alto máximo que tendrá el bloque de contenido y el tamaño de la fuente.


> Si queréis probalo en vivo, os dejo el enlace a Codepen con algunos ejemplos: [Ellipsis multiline with CSS (Mixin)](https://codepen.io/rmoralp/pen/KpaWYJ/)
