import React from 'react'
import App, {Container} from 'next/app'
import Router from 'next/router'
import {Loader} from '../components/atoms/Loader'
import '../styles/main.scss'

const LOADER_VISIBLE_CLASS = 'rm-Loader--visible'

const toggleLoader = () => {
  const $loader = document.getElementById('loader')
  $loader.classList.toggle(LOADER_VISIBLE_CLASS)
}

Router.events.on('routeChangeStart', () => toggleLoader())
Router.events.on('routeChangeComplete', () => toggleLoader())
Router.events.on('routeChangeError', () => toggleLoader())

export default class MyApp extends App {
  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render() {
    const {Component, pageProps} = this.props

    return (
      <Container>
        <Loader />
        <Component {...pageProps} />
      </Container>
    )
  }
}
