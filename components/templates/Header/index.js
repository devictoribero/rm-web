import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import {Icon} from '../../atoms/Icon'
import './style.scss'

const Header = ({isMenuOpen, toggleMenu}) => {
  const btnClass = isMenuOpen ? 'rm-Header-btn--open' : ''
  const _handleMenuClick = () => {
    toggleMenu(!isMenuOpen)
  }

  return (
    <header className="rm-Header">
      <Icon
        icon="icon-menu-btn"
        title="Menu button"
        classNames={`rm-Header-btn ${btnClass}`}
        desc=""
        handleClick={_handleMenuClick}
      />
      <Link href="/">
        <a className="rm-Header-logo">rmoral</a>
      </Link>
    </header>
  )
}

Header.defaultProps = {
  isMenuOpen: false,
  toggleMenu: () => {}
}

Header.propTypes = {
  toggleMenu: PropTypes.func,
  isMenuOpen: PropTypes.bool
}

export {Header}
