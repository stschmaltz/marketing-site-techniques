import React from 'react'
import Flip from 'react-reveal/Flip'
import './Statistic.css'

const Statistic = ({ image, text }) => {
  return (
    <div>
      <Flip top duration={1800} delay={300}>
        <div className="statistic__main-container">
          <img alt="statistic image" className="statistic__image" src={image} />
          <span className="statistic__text">{text}</span>
        </div>
      </Flip>
    </div>
  )
}

export default Statistic
