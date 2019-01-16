import React from 'react'
import SocialMediaBar from './SocialMediaBar'
import FooterLinks from './FooterLinks'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer__main-container">
      <FooterLinks />
      <SocialMediaBar />
    </div>
  )
}

export default Footer
