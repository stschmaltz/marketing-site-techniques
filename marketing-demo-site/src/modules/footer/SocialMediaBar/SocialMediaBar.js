import React from 'react'
import './SocialMediaBar.css'
import SocialMediaLink from './SocialMediaLink'
import Fade from 'react-reveal/Fade'

import {
  FaInstagram,
  FaTwitter,
  FaTwitch,
  FaDiscord,
  FaFacebook,
  FaGoodreads,
  FaLinkedinIn,
  FaRedditAlien,
} from 'react-icons/fa'

const SocialMediaBar = () => {
  return (
    <Fade className="social-media-bar__fade" delay={400} duration={1500}>
      <div className="social-media-bar__main-container">
        <span className="social-media-bar__label">Follow Us</span>
        <div className="social-media-bar__brand-bar">
          <SocialMediaLink>
            <FaInstagram className="social-media-bar__fa-icon" />
          </SocialMediaLink>
          <SocialMediaLink>
            <FaFacebook className="social-media-bar__fa-icon" />
          </SocialMediaLink>
          <SocialMediaLink>
            <FaTwitter className="social-media-bar__fa-icon" />
          </SocialMediaLink>
          <SocialMediaLink>
            <FaTwitch className="social-media-bar__fa-icon" />
          </SocialMediaLink>
          <SocialMediaLink>
            <FaLinkedinIn className="social-media-bar__fa-icon" />
          </SocialMediaLink>
          <SocialMediaLink>
            <FaRedditAlien className="social-media-bar__fa-icon" />
          </SocialMediaLink>
          <SocialMediaLink>
            <FaDiscord className="social-media-bar__fa-icon" />
          </SocialMediaLink>
          <SocialMediaLink>
            <FaGoodreads className="social-media-bar__fa-icon" />
          </SocialMediaLink>
        </div>
      </div>
    </Fade>
  )
}

export default SocialMediaBar
