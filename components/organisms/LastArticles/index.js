import React from 'react'
import PropTypes from 'prop-types'
import {PostCard} from '../../molecules/PostCard'
import './style.scss'

const LastArticles = ({posts, topic}) => {
  const titleTopic = topic && `sobre ${topic}`

  return (
    <aside className="rm-LastArticles">
      <h2 className="rm-LastArticles-title">Últimos artículos {titleTopic}</h2>
      {posts.length ? (
        posts.map(({document: {data}, slug}) => (
          <PostCard
            title={data.title}
            slug={slug}
            dateTime={data.dateTime}
            key={slug}
          />
        ))
      ) : (
        <p className="rm-LastArticles-noResult">
          No hay artículos {titleTopic}
        </p>
      )}
    </aside>
  )
}

LastArticles.propTypes = {
  posts: PropTypes.array,
  topic: PropTypes.string
}

LastArticles.defaultProps = {
  posts: []
}

export {LastArticles}
