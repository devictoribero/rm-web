import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const isDev = process.env.NODE_ENV === 'development'
const PostCard = ({title, slug, dateTime}) => {
  const url = isDev ? `/article?slug=${slug}` : `/article/${slug}`

  return (
    <aside className="rm-PostCard">
      <time dateTime={dateTime} className="rm-PostCard-date">
        {dateTime}
      </time>
      <h3 className="rm-PostCard-title">
        <a href={url}>{title}</a>
      </h3>
    </aside>
  )
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  slug: PropTypes.string
}

export {PostCard}
