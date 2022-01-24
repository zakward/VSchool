import React, {useState} from "react"
import Name from "./Name"

export default function App() {
const [names, setNames] = useState(
  {
    name: ""
  }
)
const [namesArray, setNamesArray] = useState([ ])

const namesElement = namesArray.map((name, index) => {
  return <Name key ={index} {...name}/>
})

//gathering name data and updating <h1>
function handleChange(event) {
  const {name, value} = event.target
  setNames(prevNames => {
    return {
      ...prevNames,
      [name]: value
    }
  })
}
//push data to new <li>from Name.js
function handleSubmit(event) {
  event.preventDefault()
  setNamesArray(prevNamesArray => {
    return [...prevNamesArray,
    {name: names.name}
    ]
  })
}

  return (
    <>
      <form onSubmit = {handleSubmit}>
     <input 
              type="text" 
              placeholder="Name"
              value = {names.name}
              name = "name"
              onChange = {handleChange}
      />
        <h1>{names.name}</h1>
        <button 
              type ="submit"
              className = "submit--btn">Submit</button>
        <ol>
          {namesElement}
        </ol>
      </form>
    </>
  )
}