import React, {useEffect, useState} from "react"
import axios from "axios"
import Bounty from "./Bounty"
import AddBountyForm from "./AddBountyForm"


function App() {
    const [bounty, setBounty] = useState([ ])
    
    function getBounty() {
        axios.get("/bounty")
            .then(res => setBounty(res.data))
            .catch(err => console.log(err))
    }

    function addBounty(newBounty) {
        axios.post("/bounty", newBounty)
            .then(res => {
                setBounty(prevBounty => [...prevBounty, res.data])
            })
            .catch(err => console.log(err))
    }

    function deleteBounty(bountyId) {
        axios.delete(`/bounty/${bountyId}`)
            .then(res => setBounty(prevBounty => prevBounty.filter(bounty => bounty._id !== bountyId)))
            .catch(err => console.log(err))
    }

    function editBounty(updates, bountyId) {
        axios.put(`/bounty/${bountyId}` , updates)
            .then(res => {
                setBounty(prevBounty => prevBounty.map(bounty => bounty._id !== bountyId ? bounty : res.data))
            })
            .catch(err => console.log(err))
    }
    

    useEffect( () => {
      getBounty()
    }, [ ]  )

    return (
        <>
        <div className = "bounty-container">
            <AddBountyForm  submit = {addBounty} btnText = "Add Movie"/>
            { bounty.map(bounty => <Bounty {...bounty} editBounty = {editBounty} deleteBounty = {deleteBounty} key = {bounty.firstName} />)}
        </div>
        </>
    )
}

export default App