import React from 'react'

const Blog = ({name}) => (
  <div>
    <h1>{name}</h1>
    <p>Tech blog {name}!</p>
  </div>
)

Blog.getInitialProps = async ({query}) => {
  return {name: query.name}
}

export default Blog
