const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')

const nextConfig = {
  exportPathMap: function() {
    return {
      '/': {page: '/'},
      '/blog': {page: '/blog'},
      '/projects': {page: '/projects'},
      '/article/elipsis-multilinea-css': {page: '/article', query: {slug: 'elipsis-multilinea-css'}},
      '/article/genera-sprite-libreria-iconos-svg': {page: '/article', query: {slug: 'genera-sprite-libreria-iconos-svg'}}
    }
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    if (config.mode === 'production') {
      if (Array.isArray(config.optimization.minimizer)) {
        config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}))
      }
    }

    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
      })
    )

    return config
  }
}

module.exports = withPlugins([withSass, withCSS], nextConfig)
