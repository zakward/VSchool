import React, {useState} from 'react'
import "../Carousel.css"
import ProjectData from '../ProjectData'
import BackArrow from "../backArrow.png"
import ForwardArrow from "../forwardArrow.png"




function Carousel() {

    const [currProject, setCurrProject] = useState(0)

    function backArrow() {
        if (currProject > 0) {
            setCurrProject(prevCurrProject => {
            return prevCurrProject -1 
        })
    }
    }

    function forwardArrow() {
        if (currProject < ProjectData.length -1) {
            setCurrProject(prevCurrProject => {
            return prevCurrProject +1 
        })
    }
}

  return (
      <>
          <div id = "project-link" className = "carousel">
              <h1 className = "project-header">Projects</h1>
            <div className = "carouselInner" style = {{backgroundImage: `url(${ProjectData[currProject].imgUrl})`}}>
                <div className = "left">
                    <div onClick = {backArrow} className = "back-arrow"></div>
                </div>
                <div className = "center">
                </div>
                <div className = "right">
                <div onClick = {forwardArrow} className = "forward-arrow"></div>
                </div>
            </div>
            <div className = "project-details">
                <h1 className = "project-title">{ProjectData[currProject].title}</h1>
                <h2>{ProjectData[currProject].description}</h2>
                <h3>Zak Ward</h3>
                   <div className = "github-btn-container">
                    <div className = "github-logo"></div>
                    <a href = {ProjectData[currProject].codeLink} className = "code-btn">View Code</a>
                </div>
            </div>
          </div>
      </>

  )
}

export default Carousel


      