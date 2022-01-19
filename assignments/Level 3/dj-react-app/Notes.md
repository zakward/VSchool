import React, {useState} from "react"
import Square from "./Square"

export default function App() {

// const [background, setBackground] = useState("blue")
const [colors, setColors]= useState(["white", "white","white","white"])

// function changeFirstSquare() {
//     setBackground(prevBackground => {
//           if(prevBackground=== "blue") {
//             return "green"
//           } else {
//             return "blue"
//           }
//     })
// }

function smallTimeDJ() {
    setColors(prevColors => {
      if(prevColors[0] === "white") {
        return ["black", "black", "black", "black"]
      } else {
        return ["white", "white", "white", "white"]
      }
    })
}

function purpleDJ() {
    setColors(prevColors => {
      return ["purple", "purple", prevColors[2], prevColors[3]]
    })
    }

    function bottomLeft() {
      setColors(prevColors => {
        return [prevColors[0], prevColors[1], "blue", prevColors[3]]
      })
    }

    function bottomRight() {
      setColors(prevColors => {
        return [prevColors[0], prevColors[1], prevColors[2], "blue"]
      })
    }

  return (
    <>
      <div className = "box-container">
          <Square  background= {colors[0]} />
          <Square  background= {colors[1]} />
          <Square  background= {colors[2]} />
          <Square  background= {colors[3]} />
      </div>

      {/* <button onClick = {changeFirstSquare}>Change First Square</button> */}
      <button onClick = {smallTimeDJ}>Small Time DJ</button>
      <button onClick = {purpleDJ}>Purple DJ</button>
      <button onClick = {bottomLeft}>Bottom Left</button>
      <button onClick = {bottomRight}>Bottom Right</button>

    </>
  )
}