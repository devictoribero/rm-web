// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
// Components
import {PageTitle} from '../../components/atoms/PageTitle'
import {PageSubtitle} from '../../components/atoms/PageSubtitle'
import {PostCard} from '../../components/molecules/PostCard'
import {Layout} from '../../components/templates/Layout'
// Others
import domain from '../../domain'
// Styles
import './style.scss'

const formatDateSlash = stringDate => {
  // Parameter date
  const date = new Date(stringDate)
  const day = date.getUTCDate()
  const twoDigitDay = day < 10 ? `0${day}` : day
  const month = date.getUTCMonth() + 1
  const twoDigitMonth = month < 10 ? `0${month}` : month
  const year = date.getUTCFullYear()

  return `${twoDigitDay}/${twoDigitMonth}/${year}`
}

const Blog = ({list}) => {
  const count = Object.keys(list).length
  const listArray = Object.values(list)

  return (
    <>
      <Head>
        <title>Blog - rmoral</title>
      </Head>
      <Layout>
        <section>
          <PageTitle>Frontend</PageTitle>
          <PageSubtitle>
            Hay <strong>{count}</strong> artículos sobre tecnologías y
            desarrollo web: Javascript, React, Vue, HTML, CSS, Performance, y
            mucho más!
          </PageSubtitle>
          <div className="rm-Blog">
            {listArray.map(({title, slug, updatedDate}) => (
              <PostCard
                title={title}
                slug={slug}
                dateTime={formatDateSlash(updatedDate)}
                key={slug}
              />
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}

Blog.propTypes = {
  list: PropTypes.object
}

Blog.getInitialProps = async () => {
  try {
    const list = await domain.get('get_article_list_use_case').execute()

    return {list}
  } catch (error) {
    return {error}
  }
}

export default Blog
