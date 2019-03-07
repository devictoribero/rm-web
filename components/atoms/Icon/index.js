import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({icon, title, desc, classNames, handleClick, width, height}) => {
  let label = !!title && title
  label += desc ? ` ${desc}` : ''

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      width={width}
      height={height}
      aria-label={label}
      className={classNames}
      onClick={handleClick}
    >
      <title>{title}</title>
      {!!desc && <desc>{desc}</desc>}
      <use xlinkHref={`/static/ess-sprite.svg#${icon}`} />
    </svg>
  )
}
Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  classNames: PropTypes.string,
  handleClick: PropTypes.func
}

export {Icon}
