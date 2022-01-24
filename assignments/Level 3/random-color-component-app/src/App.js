import React, {useState, useEffect} from "react"
import "./App.css"

const axios = require("axios")
export default function App() {
  const [color, setColor] = useState("")
  const [count, setCount] = useState(0)
  const randomNum = Math.floor(Math.random() * 7)

  useEffect(( ) => {
      axios.get("https://www.colr.org/json/colors/random/7")
        .then(res => setColor(res.data.colors[randomNum].hex))
        .catch(err => console.log(err))
  }, [count])

  function toggle() {
    setCount(prevCount => prevCount + 1)
  }

  const style = {backgroundColor: `#${color}`}

  return (
    <>
      <div className="random-div" style={style}></div>
      <button onClick = {toggle} type="button">Get new color</button>
    </>
  )
}


// http://www.colr.org/json/colors/random/7