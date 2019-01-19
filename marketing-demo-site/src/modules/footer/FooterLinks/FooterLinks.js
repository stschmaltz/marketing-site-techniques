import React from 'react'
import './FooterLinks.css'
import NavItem from './NavItem'

const FooterLinks = () => {
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
            header="Products"
            links={['Overview', 'Roadmap', 'Pricing']}
          />
          <NavItem
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
            header="News"
            links={[
              'Featured Story',
              'Latest Posts',
              'In The Media',
              'Newsletter',
            ]}
          />
          <NavItem header="Support" links={['User Guide', 'Safety', 'FAQ']} />
        </nav>
      </div>
    </div>
  )
}

export default FooterLinks
