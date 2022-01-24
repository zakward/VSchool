import React, {useState} from "react"
import ReactDOM from "react-dom"
import Square from "./Square"

export default function App() {

const [colors, setColors] = useState(["white", "white", "white", "white"])
const squareElements = colors.map(colors => <Square background = {colors}/>)

function smallTimeDJ() {
  setColors(prevColors => {
    if(prevColors[0] === "white") {
      return ["black", "black", "black", "black"]
    } else {
      return ["white", "white", "white", "white"]
    }
  })
  }

 function partyDJ()  {
   setColors(prevColors => {
     return ["purple", "purple", prevColors[2], prevColors[3]]
   })
 }

function professionalDJLeft() {
  setColors(prevColors => {
    return [prevColors[0], prevColors[1], "blue", prevColors[3]]
  })
} 

function professionalDJRight() {
  setColors(prevColors => {
    return [prevColors[0], prevColors[1], prevColors[2], "blue"]
  })
} 

function bigTimeDJ1() {
  setColors(prevColors => {
    return ["green", prevColors[1], prevColors[2], prevColors[3]]
  })
}

function bigTimeDJ2() {
  setColors(prevColors => {
    return [prevColors[0], "green", prevColors[2], prevColors[3]]
  })
}

function bigTimeDJ3() {
  setColors(prevColors => {
    return [prevColors[0], prevColors[1], "green", prevColors[3]]
  })
}

function bigTimeDJ4() {
  setColors(prevColors => {
    return [prevColors[0], prevColors[1], prevColors[2], "green"]
  })
}
 
  return (
    <>
      <div className = "header">DJ REACT</div>
      <div className = "box-container">
          {squareElements}
      </div>
      <button onClick = {smallTimeDJ}>Small Time DJ</button>
      <button onClick = {partyDJ}>Party DJ</button>
      <button onClick = {professionalDJLeft}>Professional DJ (btm left)</button>
      <button onClick = {professionalDJRight}>Professional DJ (btm right)</button>
      <button onClick = {bigTimeDJ1}>Big Time DJ (box 1)</button>
      <button onClick = {bigTimeDJ2}>Big Time DJ (box 2)</button>
      <button onClick = {bigTimeDJ3}>Big Time DJ (box 3)</button>
      <button onClick = {bigTimeDJ4}>Big Time DJ (box 4)</button>
    </>
  )
}
