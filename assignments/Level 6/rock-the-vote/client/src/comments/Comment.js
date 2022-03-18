import React, { useContext, useState, useEffect } from "react"
import { UserContext } from "../context/UserProvider.js"


function Comment(props) {

    const { userAxios } = useContext(UserContext)

    const [commentUser, setCommentUser] = useState("")

    const { body, user } = props


console.log(user.username)

 

    return (

<>
        <p>{body}</p>
        <p>User: {user.username}</p>
</>
    )
}

export default Comment