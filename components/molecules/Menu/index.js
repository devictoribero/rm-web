import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import {Icon} from '../../atoms/Icon'
import './style.scss'

const Menu = ({isMenuOpen, toggleMenu}) => {
  const openClassName = isMenuOpen && 'rm-Menu--open'
  const _handleMenuClick = () => {
    toggleMenu(false)
  }

  return (
    <div className={`rm-Menu ${openClassName}`}>
      <ClickAwayListener onClickAway={_handleMenuClick}>
        <nav className="rm-Menu-content">
          <span className="rm-Menu-back" onClick={_handleMenuClick}>
            <Icon
              icon="icon-arrow-left"
              title="Close Menu"
              width="25"
              height="24"
            />
          </span>
          <Link href="/">
            <a className="rm-Menu-link" onClick={_handleMenuClick}>
              Inicio
            </a>
          </Link>

          <Link href="/blog">
            <a className="rm-Menu-link" onClick={_handleMenuClick}>
              Blog
            </a>
          </Link>

          <Link href="/projects">
            <a className="rm-Menu-link" onClick={_handleMenuClick}>
              Proyectos
            </a>
          </Link>
        </nav>
      </ClickAwayListener>

      <div className="rm-Menu-overlay" />
    </div>
  )
}

Menu.defaultProps = {
  isMenuOpen: false,
  toggleMenu: () => {}
}

Menu.propTypes = {
  toggleMenu: PropTypes.func,
  isMenuOpen: PropTypes.bool
}

export {Menu}
