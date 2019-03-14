import React from 'react'
import PropTypes from 'prop-types'
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
          <a href="/" className="rm-Menu-link" onClick={_handleMenuClick}>
            Inicio
          </a>
          <a href="/blog" className="rm-Menu-link" onClick={_handleMenuClick}>
            Blog
          </a>
          <a
            href="/projects"
            className="rm-Menu-link"
            onClick={_handleMenuClick}
          >
            Proyectos
          </a>
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
