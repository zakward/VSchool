import React, { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Auth from "./components/Auth"
import Profile from "./components/Profile"
import Public from "./components/Public"
import { UserContext } from "./context/UserProvider"



function App() {

  const { token, logout } = useContext(UserContext)

  return (
    <>
      <div className = "app">
        <Navbar logout = {logout}/>
        <Routes>
          <Route exact path = "/" element = {token ? <Navigate replace to = "/profile"  /> : <Auth />} />
          <Route path = "/profile" element = {<Profile />} />
          <Route path = "/public" element = {<Public /> } /> 
         </Routes>
      </div>
    </>
  )
}

export default App
