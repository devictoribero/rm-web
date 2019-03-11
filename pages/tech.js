import React from 'react'
import {RichText} from 'prismic-reactjs'
import domain from '../domain'
import linkResolver from '../helpers/linkResolver'

const Blog = ({document} = null) => {
  if (!document) {
    return (
      <div>
        <p>Tech blog!</p>
      </div>
    )
  }

  return (
    <div>
      <h1>{RichText.render(document.data.title, linkResolver)}</h1>
    </div>
  )
}
// 'genera-sprite-libreria-iconos-svg'
Blog.getInitialProps = async ({query}) => {
  const {slug} = query

  if (slug) {
    const document = await domain
      .get('get_frontend_post_use_case')
      .execute({slug})

    return {document}
  }
}

export default Blog
