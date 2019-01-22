import React, { Component } from 'react'
import './PeriscopeBanner.css'
import VisibilitySensor from 'react-visibility-sensor'

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
        <a className="periscope-pricing-link">See Our Plans</a>
      </div>
    )
  }
}

export default PeriscopeBanner
