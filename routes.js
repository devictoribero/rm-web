const blogIndex = require('./content/index.json')

const staticRoutes = {
  '/': {page: '/'},
  '/blog': {page: '/blog'},
  '/projects': {page: '/projects'},
  '/article': {page: '/article'}
}

/**
 * Add blog routes and return
 * @param {Object} staticRoutes
 */
function withBlogRoutes(staticRoutes = {}) {
  let routes = {
    ...staticRoutes
  }

  blogIndex.list.forEach(post => {
    const file = `/article/${post.slug}`

    routes[file] = {
      page: '/article',
      query: {slug: post.slug}
    }
  })

  return routes
}

module.exports = withBlogRoutes(staticRoutes)
