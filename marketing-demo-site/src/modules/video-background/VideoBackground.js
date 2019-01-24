import React from 'react'
import sample1 from '../../images/purple.mp4'
import sample2 from '../../images/mlky_6.mp4'
import sample3 from '../../images/b-and-w-escalators.mp4'
import sample4 from '../../images/purple-hourglass.mp4'
import sample5 from '../../images/purple-lights-1080p.mp4'
import sample6 from '../../images/Sunrise.mp4'
import './VideoBackground.css'

const VideoBackground = () => {
  return (
    <div className="video-background_container">
      <video className="video-background_video" autoPlay loop muted>
        <source src={sample6} type="video/mp4" />
      </video>
      <div className="video-background_text-container">
        <h2 className="video-background_text-desc">
          A Product That Is Truly Cool
        </h2>
        <h1 className="video-background_text-tag">
          From A Company That Builds Cool Stuff
        </h1>
        <h3>Cool Company</h3>
      </div>
    </div>
  )
}

export default VideoBackground
