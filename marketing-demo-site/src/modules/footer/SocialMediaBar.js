import React from 'react'
import './SocialMediaBar.css'
import SocialMediaLink from './SocialMediaLink'

const SocialMediaBar = () => {
  return (
    <div className="social-media-bar__main-container">
      <span style={{ color: '#eee' }}>Follow Us</span>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SocialMediaLink />
        <SocialMediaLink />
        <SocialMediaLink />
        <SocialMediaLink />
        <SocialMediaLink />
        <SocialMediaLink />
        <SocialMediaLink />
      </div>
    </div>
  )
}

export default SocialMediaBar
