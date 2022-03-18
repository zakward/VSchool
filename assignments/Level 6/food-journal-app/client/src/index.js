import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import UserProvider from "./context/UserProvider.js"
import ExploreProvider from "./context/ExploreProvider.js"

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ExploreProvider>
        <App />
      </ExploreProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
)