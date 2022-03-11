import React, { useContext, useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Auth from "./components/Auth"
import Profile from "./components/Profile"
import Public from "./components/Public"
import { UserContext } from "./context/UserProvider"
import { SettingsInputSvideoRounded } from "@material-ui/icons"




function App() {

  const { token, logout } = useContext(UserContext)

  return (
    <>
      <div className = "app">
        { token && <Navbar logout = {logout}/>}
        <Routes>
          <Route exact path = "/" element = {token ? <Navigate replace to = "/profile"  /> : <Auth />} />
          <Route path = "/profile" element = { token ? <Profile /> : <Navigate replace to ="/" />} />
          <Route path = "/public" element = { token ? <Public />: <Navigate replace to = "/" /> } /> 
         </Routes>
      </div>
    </>
  )
}

export default App
