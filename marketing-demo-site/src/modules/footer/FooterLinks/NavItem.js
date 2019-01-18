import React from 'react'
import './NavItem.css'

const mapLinksToLI = links =>
  links.map(link => (
    <li>
      <a>{link}</a>
    </li>
  ))

const NavItem = ({ header, links }) => {
  return (
    <div className="nav-item__container">
      <a className="nav-item__header">{header}</a>
      <ul className="nav-item__links-list">{mapLinksToLI(links)}</ul>
    </div>
  )
}

export default NavItem
