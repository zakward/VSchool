import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main"
import Content from "./components/Content"

export default function App() {
  return (
    <>
      <Nav />
      <Main />
      <Content
        img ="katie-zaferes.png"
        rating = "5.0"
        reviewCount = {"6"}
        country = "USA"
        title = {"Life Lessons with Katie Zaferes"}
        price = {136}
      />      
    </>
  )
}