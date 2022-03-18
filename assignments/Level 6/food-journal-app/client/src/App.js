import React, { useContext } from "react" 
import { Routes, Route, Navigate } from "react-router-dom"
import Auth from "./components/Auth.js"
import { UserContext } from "./context/UserProvider.js"
import Profile from "./components/Profile.js"
import Navbar from "./components/Navbar.js"
import Explore from "./components/Explore.js"

function App() {

  const { token, logout } = useContext(UserContext)

  return (
    <>
    { token && <Navbar logout = {logout} />}
    <Routes>
      <Route exact path = "/" element = {token ? <Navigate replace to = "/profile" /> : <Auth />}/>
      <Route path = "/profile" element = { token ? <Profile /> : <Navigate replace to = "/" />} />
      <Route path = "/explore" element = { token ? <Explore /> : <Navigate replace to = "/" />} />
    </Routes>
    </>
  )
}

export default App
