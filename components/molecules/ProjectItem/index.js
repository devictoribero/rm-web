import React from 'react'
import PropTypes from 'prop-types'
import {Icon} from '../../atoms/Icon'
import './style.scss'

const ProjectItem = ({title, text, url, icon}) => (
  <a
    href={url}
    target="_blank"
    title={`Ver ${title}`}
    className="rm-ProjectItem"
  >
    <span className="rm-ProjectItem-title">
      {icon && (
        <Icon
          icon={icon}
          title="Menu button"
          classNames={`rm-ProjectItem-icon`}
          width="30"
          height="30"
        />
      )}
      <strong>{title}</strong>
    </span>

    <span className="rm-ProjectItem-desc">{text}</span>
  </a>
)

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string
}

export {ProjectItem}
