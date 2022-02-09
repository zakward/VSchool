import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {ContextProvider} from "./ContextProvider"
import App from "./App"
import About from "./components/About"
import Home from "./components/Home"
import RandomDrink from "./components/RandomDrink"
import SearchByIngredient from "./components/SearchByIngredient"
import SearchByName from "./components/SearchByName"

ReactDOM.render(
  <Router>
            <App />
  </Router>,
  document.getElementById("root")
)
