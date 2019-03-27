const routes = {
  '/': {page: '/'},
  '/blog': {page: '/blog'},
  '/projects': {page: '/projects'},
  '/article': {page: '/article'},
  '/article/elipsis-multilinea-css': {
    page: '/article',
    query: {slug: 'elipsis-multilinea-css'}
  },
  '/article/genera-sprite-libreria-iconos-svg': {
    page: '/article',
    query: {slug: 'genera-sprite-libreria-iconos-svg'}
  }
}

module.exports = routes
