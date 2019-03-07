import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const PageSubtitle = ({children}) => (
  <p className="rm-PageSubtitle">{children}</p>
)

PageSubtitle.propTypes = {
  children: PropTypes.node.isRequired
}

export {PageSubtitle}
