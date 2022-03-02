import React from "react"
// import { Link } from "react-router-dom"
import "../Styles.css"
import Resume from "../zakResume.pdf"

function Navbar() {
    return(
        <>
           <div className = "navbar-container">
               <div className = "header">
                   <h1 className = "nav-title">Portfolio</h1>
               </div>
               <div className = "links-container">
                    {/* <Link to = "/" className = "link">Home</Link> */}
                    {/* <Link to = "/experience" className = "link">Experience</Link>
                    <Link to = "/posts" className = "link">Posts</Link> */}
                    {/* <Link to = "/resume" className = "link">Resume</Link> */}
                    <a href = "#bio-link" className = "link">Home</a>
                    <a href = "#project-link" className = "link">Projects</a>
                    <a href = {Resume} target = "_blank" className = "link">Resume</a>
                    
               </div>
           </div>
        </>
    )
}

export default Navbar