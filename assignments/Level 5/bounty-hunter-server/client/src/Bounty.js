import React, {useState} from "react"
import "./Styles.css"
import AddBountyForm from "./AddBountyForm"



function Bounty(props) {
    const {firstName, lastName, isDead, bountyAmount, deleteBounty, _id, btnText} = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <>
            <div className="bounty">
                { !editToggle ?
                <>
                <h1>First Name: {firstName}</h1>
                <h1>Last Name: {lastName}</h1>
                <p>Dead?: {isDead ? "TRUE" : "FALSE" }</p>
                <p>Bounty Amount: {bountyAmount}</p>
                <button className="delete-btn" onClick = {() => deleteBounty(_id)}>Delete</button>
                <button className= "edit-btn" onClick = {()=> setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                </>           

                :
                <>
                  <AddBountyForm 
                        firstName={firstName}
                        lastName ={lastName} 
                        isDead ={isDead} 
                        bountyAmount ={bountyAmount}
                        btnText = "Submit Edit"
                        submit = {props.editBounty}
                        _id= {_id}
                />
                <button onClick = {()=> setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
              
                }
                

            </div>
        </>
    )
}

export default Bounty