import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const PageTitle = ({children}) => <h1 className="rm-PageTitle">{children}</h1>

PageTitle.propTypes = {
  children: PropTypes.node.isRequired
}

export {PageTitle}
