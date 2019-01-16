import React from 'react'
import Flip from 'react-reveal/Flip'
import './StatisticsBanner.css'
import Statistic from './Statistic'
import customer from '../../images/satisfied-customer.svg'
import time from '../../images/time-is-money.svg'
import money from '../../images/money-bag.svg'

const StatisticsBanner = () => {
  return (
    <div className="statistic-banner__main-container">
      <Statistic text="25% more efficient" image={time} />
      <Statistic text="1M customers satisfied" image={customer} />
      <Statistic text="1.5x increase in profit" image={money} />
    </div>
  )
}

export default StatisticsBanner
