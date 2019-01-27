import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import StatsAnimation from '../modules/statistics-banner/StatisticsBanner'
import Footer from '../modules/footer/Footer'
import PeriscopePromo from '../modules/periscope-promo/PeriscopePromo'
import VideoBackground from '../modules/video-background/VideoBackground'
import BigInfoParagraph from '../modules/big-info-para/BigInfoParagraph'
import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="content-main_container">
      <VideoBackground />
      <BigInfoParagraph />

      <StatsAnimation />
      <PeriscopePromo />
    </div>
    <Footer />
  </Layout>
)

export default IndexPage
