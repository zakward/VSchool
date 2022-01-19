import React from "react"
import Navbar from "./components/Navbar"
import TravelCard from "./components/TravelCard"
import data from ".//components/data"

export default function App() {
  const travelCardElement = data.map(item => {
      return <TravelCard 
                      key = {item.title}
                      {...item}
                      />

  })
  return (
    <>
      <Navbar />
      {travelCardElement}
    </>
  )
}