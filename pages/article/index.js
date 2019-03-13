// Dependencies
import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import Prism from 'prismjs'
// Components
import {Layout} from '../../components/templates/Layout'
import {PageTitle} from '../../components/atoms/PageTitle'
import Error from '../_error'
// Others
import domain from '../../domain'
// Styles
import './style.scss'
import 'prismjs/themes/prism-okaidia.css'

const Article = ({article}) => {
  useEffect(() => {
    Prism.highlightAll()
  })

  domain
    .get('get_article_post_use_case')
    .execute({slug: 'genera-sprite-libreria-iconos-svg'})

  if (!article) return <Error statusCode={404} />

  return (
    <>
      <Head>
        <title>{article.title} - rmoral</title>
      </Head>
      <Layout>
        <article className="rm-Article">
          <PageTitle>{article.title}</PageTitle>
          <ReactMarkdown source={article.content} />
        </article>
      </Layout>
    </>
  )
}

Article.getInitialProps = async ({query}) => {
  const {slug} = query

  try {
    const article = await domain
      .get('get_article_post_use_case')
      .execute({slug})

    return {article}
  } catch (error) {
    return {error}
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string,
    content: PropTypes.string.isRequired,
    readTime: PropTypes.number,
    updatedDate: PropTypes.string
  })
}

export default Article
