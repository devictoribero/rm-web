import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import {Menu} from '../../molecules/Menu'
import {Footer} from '../Footer'
import {Header} from '../Header'

const Layout = ({children}) => {
  const [isMenuOpen, toggleMenu] = useState(false)
  return (
    <main>
      <Menu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div className="rm-Layout">
        <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <>{children}</>
        <Footer />
      </div>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export {Layout}
