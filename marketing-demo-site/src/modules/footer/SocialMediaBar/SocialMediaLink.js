import React from 'react'
import posed from 'react-pose'
import './SocialMediaLink.css'

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
  },
  press: {
    scale: 1.1,
  },
})

const SocialMediaLink = ({ children }) => {
  return (
    <Box className="social-media-link__container">
      <a>
        <div className="social-media-link__inner-container">{children}</div>
      </a>
    </Box>
  )
}

export default SocialMediaLink
