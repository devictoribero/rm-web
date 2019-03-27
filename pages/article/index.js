// Dependencies
import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import Prism from 'prismjs'
import 'prismjs/components/prism-scss'
// Components
import {Layout} from '../../components/templates/Layout'
import {PageTitle} from '../../components/atoms/PageTitle'
import Error from '../_error'
// Styles
import './style.scss'
import 'prismjs/themes/prism-okaidia.css'

const Article = ({content, data}) => {
  useEffect(() => {
    Prism.highlightAll()
  })

  if (!content) return <Error statusCode={404} />

  return (
    <>
      <Head>
        <title>{data.title} - rmoral</title>
      </Head>
      <Layout>
        <article className="rm-Article">
          <PageTitle>{data.title}</PageTitle>
          <ReactMarkdown source={content} />
        </article>
      </Layout>
    </>
  )
}

Article.getInitialProps = async ({query}) => {
  const {slug} = query

  try {
    const content = await require(`../../content/${slug}.md`)
    const document = matter(content.default)

    return {
      ...document
    }
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
  }),
  slug: PropTypes.string
}

export default Article
