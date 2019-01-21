import React from 'react'
import SocialMediaBar from './SocialMediaBar'
import FooterLinks from './FooterLinks'
import './Footer.css'
import sizeMe from 'react-sizeme'

const Footer = ({ size }) => {
  console.log(size)
  const { width } = size
  console.log(width)

  return (
    <div className="footer__main-container">
      <FooterLinks width={width} />
      <SocialMediaBar />
    </div>
  )
}

export default sizeMe()(Footer)
