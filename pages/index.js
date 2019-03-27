import React from 'react'
import Head from 'next/head'
import {Layout} from '../components/templates/Layout'
import './style.scss'

const Home = pepe => {
  console.log(pepe)
  return (
    <>
      <Head>
        <title>rmoral</title>
      </Head>
      <Layout>
        <section className="rm-Home">
          <aside className="rm-Home-hero">
            <img
              src="//res.cloudinary.com/rmoralp/rmoral.jpg"
              className="rm-Home-heroImg"
              alt="Foto de Rafa Moral"
              width="175"
              height="175"
            />
            <h1 className="rm-Home-heroTitle">Rafa Moral</h1>
            <p className="rm-Home-heroSubtitle">
              Senior Frontend Engineer en{' '}
              <a
                href="https://www.schibsted.es/"
                title="Schibsted"
                target="_blank"
              >
                Schibsted
              </a>{' '}
              <br />
              <a
                href="https://twinandchic.com"
                title="Twin&Chic"
                target="_blank"
              >
                Twin&Chic
              </a>{' '}
              Co-founder
            </p>
          </aside>
        </section>
      </Layout>
    </>
  )
}

Home.getInitialProps = async () => {
  try {
    const pepe = await require('../routes.js')
    return pepe
  } catch (error) {
    return {error}
  }
}

export default Home
