const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
const routes = require('./routes')

const nextConfig = {
  exportPathMap: () => routes,
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

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })

    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
      })
    )

    return config
  }
}

module.exports = withPlugins([withSass, withCSS], nextConfig)
