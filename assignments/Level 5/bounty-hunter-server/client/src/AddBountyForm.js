import axios from "axios"
import React, {useState} from "react"

function AddBountyForm(props) {
const initInputs = { firstName: props.firstName || "",
                                lastName: props.lastName || "",
                                isDead: props.isDead || "",
                                bountyAmount: props.bountyAmount || ""                             
}
const [inputs, setInputs] = useState(initInputs)

function handleChange(event) {
    const {name, value} = event.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
}

function handleSubmit(event) {
    event.preventDefault()
    props.submit(inputs, props._id  )
    setInputs(initInputs)
    console.log(inputs)
}

    return (
        <form onSubmit = {handleSubmit}>
            <input type = "text" name = "firstName" value = {inputs.firstName} onChange = {handleChange} placeholder= "First Name" />
            <input type = "text" name = "lastName" value = {inputs.lastName} onChange = {handleChange} placeholder= "Last Name" />
            <input type = "text" name = "isDead" value = {inputs.isDead} onChange = {handleChange} placeholder= "Bounty Dead!? Yes or No" />
            <input type = "text" name = "type" value = {inputs.type} onChange = {handleChange} placeholder = "Sith, Jedi, or Ninja"/>
            <input type = "text" name = "bountyAmount" value = {inputs.bountyAmount} onChange = {handleChange} placeholder= "Bounty Amount?" />
            <button>{props.btnText}</button>
        </form>
    )
}

export default AddBountyForm