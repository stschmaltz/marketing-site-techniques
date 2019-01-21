import React from 'react'
import './NavItem.css'

const mapLinksToLI = links =>
  links.map(link => (
    <li key={link}>
      <a>{link}</a>
    </li>
  ))

const NavItem = ({ header, links, renderLinks }) => {
  console.log(renderLinks)
  return (
    <div className="nav-item__container">
      <a className="nav-item__header">{header}</a>
      {renderLinks && (
        <ul className="nav-item__links-list">{mapLinksToLI(links)}</ul>
      )}
    </div>
  )
}

export default NavItem
