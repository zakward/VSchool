import React, {useState, useEffect} from "react"
import axios from "axios"
import Event from "./Event"



function App() {

  // const [event, setEvent] = useState({
  //   name: "",
  //   type: ""
  // })

  // const [eventArray, setEventArray] = useState([]) 

  axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

  // const eventElement = eventArray.map(event => {
  //   return <h1></h1>
  // })

  return (
    <>
      <h1>Test</h1>
    </>
  )
}

export default App