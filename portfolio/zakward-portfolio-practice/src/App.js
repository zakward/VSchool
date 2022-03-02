import React from "react"
import Navbar from "./components/Navbar"
import Biography from "./components/Biography"
import ProjectList from "./components/ProjectsList"
import Footer from "./components/Footer"
import Carousel from "./components/Carousel"
import Project from "./components/Project"
import "./Styles.css"

function App() {
  return (
    <>
      <Navbar />
      <Biography />
      {/* <ProjectList /> */}
      <div className = "project-carousel-container">
        <Carousel />
        </div>
      <Footer />
    </>
  )
}

export default App