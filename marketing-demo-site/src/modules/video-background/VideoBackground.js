import React from 'react'
import SunriseVideoMp4 from '../../images/Sunrise.mp4'
import SunriseVideoWebm from '../../images/Sunrise.webm'
import SunriseVideoPic from '../../images/Sunrise.png'
import './VideoBackground.css'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'

const VideoBackground = () => {
  return (
    <div className="video-background_container">
      <div className="video-background_overlay" />
      <video
        className="video-background_video"
        poster={SunriseVideoPic}
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
      >
        <source alt="sunrise mp4" src={SunriseVideoMp4} type="video/mp4" />
        <source alt="sunrise webm" src={SunriseVideoWebm} type="video/webm" />
      </video>
      <img
        className="video-background_video-fallback-img"
        src={SunriseVideoPic}
        alt="Sunrise"
      />
      <div className="video-background_text-container">
        <Fade top duration={2000}>
          <h2 className="video-background_product-desc">
            A Product That Is Truly Cool
          </h2>
        </Fade>
        <Fade top delay={1500} duration={2000}>
          <h1 className="video-background_company-tag">
            From A Company That Builds Cool Stuff
          </h1>
        </Fade>
        <Fade top delay={3000} duration={2000}>
          <h3 className="video-background_company-brand">😎 Cool Company</h3>
        </Fade>
      </div>
    </div>
  )
}

export default VideoBackground
