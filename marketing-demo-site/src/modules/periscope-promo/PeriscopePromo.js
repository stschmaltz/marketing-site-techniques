import React from 'react'
import PropTypes from 'prop-types'
import './PeriscopePromo.css'
import PeriscopeBanner from './PeriscopeBanner'
import VisibilitySensor from 'react-visibility-sensor'

const PeriscopePromo = props => {
  return (
    <div className="periscope-window">
      <PeriscopeBanner />}
    </div>
  )
}

PeriscopePromo.propTypes = {}

export default PeriscopePromo
