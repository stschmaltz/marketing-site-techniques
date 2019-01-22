import React from 'react'
import SocialMediaBar from './SocialMediaBar'
import FooterLinks from './FooterLinks'
import './Footer.css'
import sizeMe from 'react-sizeme'

const Footer = ({ size }) => {
  const { width } = size

  return (
    <div className="footer__main-container">
      <FooterLinks width={width} />
      <SocialMediaBar />
    </div>
  )
}

export default sizeMe()(Footer)
