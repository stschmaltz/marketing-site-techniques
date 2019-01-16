import React from 'react'
import Flip from 'react-reveal/Flip'
import Img from 'gatsby-image'
import './Statistic.css'

const Statistic = ({ image, text }) => {
  return (
    <div>
      <Flip top duration={2000} delay={300}>
        <div className="statistic-container">
          <img className="statistic-image" src={image} />
          <span>{text}</span>
        </div>
      </Flip>
    </div>
  )
}

export default Statistic
