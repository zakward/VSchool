import React, {useState, useContext} from "react"
import PointUp from "../260-point-up.png"
import PointDown from "../262-point-down.png"
import {UserContext} from "../context/UserProvider.js"

function Post(props) {
    const { title, description, imgUrl, upVoteUsers, downVoteUsers, _id} = props
    const [ totalVotes, setTotalVotes ] = useState(upVoteUsers.length - downVoteUsers.length)


    const { userAxios } = useContext(UserContext)

    function handleVoteClickUp() {
        userAxios.put(`/api/issue/upVotesUsers/${_id}`)
            .then(res => setTotalVotes(res.data.upVoteUsers.length - res.data.downVoteUsers.length))
            .catch(err => console.log(err))
  
    }

    function handleVoteClickDown() {
        userAxios.put(`/api/issue/downVotesUsers/${_id}`)
            .then(res => setTotalVotes(res.data.upVoteUsers.length - res.data.downVoteUsers.length))
            .catch(err => console.log(err))
    }

    console.log(totalVotes)

    return (
        <>
            <div className = "post">
                <h1> USER: </h1>
                <h2> { title } </h2>
                <h3> { description } </h3>
                <img src = {imgUrl} alt = {imgUrl} width = {300} />
                <img src = {PointUp} onClick = {handleVoteClickUp}/>UpVote   
                <img src = {PointDown} onClick = {handleVoteClickDown} /> DownVote
                <p> Total Votes = { totalVotes } </p>
            </div>
        </>
    )
}

export default Post