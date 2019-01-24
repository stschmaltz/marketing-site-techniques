import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import StatsAnimation from '../modules/statistics-banner/StatisticsBanner'
import Footer from '../modules/footer/Footer'
import PeriscopePromo from '../modules/periscope-promo/PeriscopePromo'
import VideoBackground from '../modules/video-background/VideoBackground'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <VideoBackground />
    <div
      style={{
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <h1>Hi people</h1>
      <p>Welcome.</p>
      <div
        style={{
          width: '100vw',
          maxWidth: `300px`,
        }}
      >
        <Image path="gatsby-astronaut.png" />
      </div>
    </div>

    <StatsAnimation />
    <PeriscopePromo />
    <Footer />
  </Layout>
)

export default IndexPage
