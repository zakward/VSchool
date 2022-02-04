import React from "react"
import About from "./About"
import Services from "./Services"
import Home from "./Home"
import "./App.css"
import {Link, Outlet} from "react-router-dom"

function App() {
  return (
    <>
      <nav className = "navbar">
        <Link to = "/Home">Home</Link>
        <Link to = "/About">About</Link>
        <Link to = "/Services">Services</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default App