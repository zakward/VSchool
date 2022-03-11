import React, {useEffect, useContext } from "react"
import axios from "axios"
import { UserContext } from "../context/UserProvider"
import Post from "../components/Post.js"

function Public() {

    const { getAllPosts, allPosts } = useContext(UserContext)

    useEffect(() => {
        getAllPosts()
    }, [ ]
    )

  

const sortedPost = allPosts.sort((a,b) => {
    const first = a.upVoteUsers.length - a.downVoteUsers.length
    const second = b.upVoteUsers.length - b.downVoteUsers.length
    if (first < second ) {
        return 1
    }
    if (first  > second) {
        return -1
    }
    return 0
})
console.log(sortedPost)

    const postElements = sortedPost.map(post => {
     return <Post {...post} key = {post._id}/> })
  
     //IMPORTANT QUESTION --> how to re render public page when upvote or downvote changes










    return (
        <>
            <div className = "public">
                <h1>This is the PUBLIC page!</h1>
                    {postElements}
            </div>
        </>
    )
}

export default Public