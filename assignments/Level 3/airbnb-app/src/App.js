import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main"
import Content from "./components/Content"
import ContentList from "./components/ContentList";
import Data from "./components/Data"

export default function App() {
  return (
    <>
      <Nav />
      <Main />
      <ContentList />      
    </>
  )
}