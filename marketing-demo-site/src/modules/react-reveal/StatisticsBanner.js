import React from 'react'
import Flip from 'react-reveal/Flip'
import './main.css'

const main = () => {
  return (
    <div>
      <div className="react-reveal-main">
        <Flip top cascade duration={2000}>
          1M Customers Satisfied
        </Flip>
        <Flip bottom cascade duration={2000}>
          1M Customers Satisfied
        </Flip>
        <Flip top cascade duration={2000}>
          1M Customers Satisfied
        </Flip>
      </div>
    </div>
  )
}

export default main
