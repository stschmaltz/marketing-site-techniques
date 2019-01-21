import React from 'react'
import './FooterLinks.css'
import NavItem from './NavItem'

const FooterLinks = ({ width }) => {
  const renderLinks = width > 800
  console.log(renderLinks)
  return (
    <div className="footer-links__main-container">
      <div className="footer-links__brand-column">
        <div className="footer-links__brand">😎Cool Company</div>
        <div className="footer-links__brand-copyright">
          © Cool Company {new Date().getFullYear()}
        </div>
      </div>
      <div className="footer-links__nav-container">
        <nav className="footer-links__nav">
          <NavItem
            renderLinks={renderLinks}
            header="Products"
            links={['Overview', 'Roadmap', 'Pricing']}
          />
          <NavItem
            renderLinks={renderLinks}
            header="About Us"
            links={[
              'Our Story',
              'Our Team',
              'Our Partners',
              'Careers',
              'Contact Us',
            ]}
          />
          <NavItem
            renderLinks={renderLinks}
            header="News"
            links={[
              'Featured Story',
              'Latest Posts',
              'In The Media',
              'Newsletter',
            ]}
          />
          <NavItem
            renderLinks={renderLinks}
            header="Support"
            links={['User Guide', 'Safety', 'FAQ']}
          />
        </nav>
      </div>
    </div>
  )
}

export default FooterLinks
