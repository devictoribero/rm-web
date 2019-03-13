import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <html lang="es-es">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="x-ua-compatible" content="IE=edge" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.png" />
          <link
            rel="preconnect dns-prefetch"
            href="https://res.cloudinary.com"
          />
          <link
            rel="preconnect dns-prefetch"
            href="https://rmweb-c213.restdb.io"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
