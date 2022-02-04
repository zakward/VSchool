import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Services from "./Services"
import About from "./About"
import Home from "./Home"
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom"


ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path = "/" element = {<App />}>
          <Route path = "/Home" element = {<Home />} />
          <Route path = "/About" element = {<About />} />
          <Route path = "/Services" element = {<Services />} />
        </Route>
    </Routes>
    
  </BrowserRouter>,
  document.getElementById("root")
)
