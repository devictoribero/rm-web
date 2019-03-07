import React from 'react'
import './style.scss'

const year = new Date().getFullYear()
const Footer = () => (
  <footer className="rm-Footer">
    <span>© {year} Rafa Moral</span>
    <div>
      <a
        href="https://github.com/rmoralp"
        title="Perfil en github"
        className="rm-Footer-lnk"
        target="_blank"
      >
        Github
      </a>
      ·
      <a
        href="https://linkedin.com/in/rafamoral/"
        title="Perfil de linkedin"
        className="rm-Footer-lnk"
        target="_blank"
      >
        Linkedin
      </a>
    </div>
  </footer>
)

export {Footer}
