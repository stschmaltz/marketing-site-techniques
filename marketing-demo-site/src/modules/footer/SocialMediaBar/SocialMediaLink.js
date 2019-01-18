import React from 'react'
import posed from 'react-pose'

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
    <Box style={{ margin: '0.2rem 0.6rem' }}>
      <a>
        <div style={{ width: '50px', height: '50px' }}>{children}</div>
      </a>
    </Box>
  )
}

export default SocialMediaLink
