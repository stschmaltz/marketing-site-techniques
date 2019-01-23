import React, { Component } from 'react'
import posed from 'react-pose'
import './PeriscopeBanner.css'

const Box = posed.div({
  pressable: true,
  init: {
    scale: 1,
  },
  press: {
    scale: 0.95,
  },
})

class PeriscopeBanner extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }
  listenScrollEvent = () => {
    console.log('Scroll event detected!')
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      <div className="periscope-pricing-badge">
        <div>
          <span className="periscope-pricing-cta">
            Let Us Help Take Your Business Further
          </span>
        </div>
        <Box>
          <a className="periscope-pricing-link">See Our Plans</a>
        </Box>
      </div>
    )
  }
}

export default PeriscopeBanner
