import React from 'react'
import Image from '../../components/image'
import './BigInfoParagraph.css'
import Fade from 'react-reveal/Fade'

const BigInfoParagraph = () => {
  return (
    <div className="info-paragraph__container">
      <div className="info-paragraph__header-container">
        <Fade left duration={1500}>
          <h1 className="info-paragraph__header">
            Introducing Something New...
          </h1>
        </Fade>
      </div>
      <div className="info-paragraph__paragraph-container">
        <Fade right delay={750} duration={1500}>
          <p className="info-paragraph__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            maximus orci et velit egestas, sit amet varius nibh rutrum. Nam
            auctor gravida dapibus. Pellentesque aliquet volutpat nisl. Ut
            porttitor sapien quis lacus ultrices, ac elementum turpis tristique.
            Curabitur pretium tellus elit. Donec a ipsum sed magna faucibus
            ultrices sit amet ut diam.
          </p>
        </Fade>
      </div>
    </div>
  )
}

export default BigInfoParagraph
