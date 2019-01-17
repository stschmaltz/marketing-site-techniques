import React from 'react'
import './SocialMediaBar.css'
import SocialMediaLink from './SocialMediaLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  FaInstagram,
  FaTwitter,
  FaTwitch,
  FaDiscord,
  FaFacebook,
  FaGoodreads,
  FaLinkedin,
  FaReddit,
} from 'react-icons/fa'

const SocialMediaBar = () => {
  return (
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
          <FaDiscord className="social-media-bar__fa-icon" />
        </SocialMediaLink>
        <SocialMediaLink>
          <FaGoodreads className="social-media-bar__fa-icon" />
        </SocialMediaLink>
        <SocialMediaLink>
          <FaLinkedin className="social-media-bar__fa-icon" />
        </SocialMediaLink>
        <SocialMediaLink>
          <FaReddit className="social-media-bar__fa-icon" />
        </SocialMediaLink>
      </div>
    </div>
  )
}

export default SocialMediaBar
