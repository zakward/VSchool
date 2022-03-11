import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import { UserContext } from "../context/UserProvider.js"
import Comment from "../comments/Comment.js"


function Comments(props) {

    const { id } = props

    const { userAxios, post } = useContext(UserContext)

//state for comments
    const [backendComments, setBackendComments ] = useState([ ])
    const initComment = {
        body: ""
    }
    const [ comment, setComment ] = useState(initComment)

    const commentElements = backendComments.map(comment => {
       return <Comment  key = {comment._id} {...comment} />
    })
    //  ATTEMPT AT PARENT ID
    // const rootComments = backendComments.filter(
    //     (backendComment) => backendComment.parendId === null
    // )

    useEffect( () => {
        userAxios.get(`/api/comment/${id}`)
            .then(res => setBackendComments(res.data))
            .catch(err => console.log(err))

    }, [] )

console.log(backendComments)

function handleCommentChange(e) {
    const {name, value} = e.target
    setComment(prevComment => ({
        ...prevComment,
        [name] :  value
    }))
}

function addComment(newComment) {
    userAxios.post(`/api/comment/${id}`, newComment)
        .then(res => setBackendComments(prevBackendComments => {
            return [
                ...prevBackendComments,
                res.data
            ]
        }))
        .catch(err => console.log(err))
}


function handleCommentSubmit(e){
e.preventDefault()
addComment(comment)
setComment(initComment)
}


const { body } = comment
console.log(comment)

    return (

<>
        <div className = "comments">
            <h3>Comments</h3>
            <form onSubmit = {handleCommentSubmit}>
                    <input className = "comment-input" name = "body" onChange = {handleCommentChange} value = {body} placeholder="Add a Comment" />
                    <button type = "submit" className = "add-comment-btn" >ADD</button>
                </form>
            <div>
                {commentElements}
            </div>
        </div>
</>
    )
}

export default Comments