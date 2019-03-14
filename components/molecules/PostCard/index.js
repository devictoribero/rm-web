import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import './style.scss'

const PostCard = ({title, slug, dateTime}) => (
  <aside className="rm-PostCard">
    <time dateTime={dateTime} className="rm-PostCard-date">
      {dateTime}
    </time>
    <h3 className="rm-PostCard-title">
      <Link href={`/article?slug=${slug}`} as={`/article/${slug}`}>
        <a>{title}</a>
      </Link>
    </h3>
  </aside>
)

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  slug: PropTypes.string
}

export {PostCard}
