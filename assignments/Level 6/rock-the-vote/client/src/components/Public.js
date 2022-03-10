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

    const postElements = allPosts.map(post => {
     return <Post {...post} key = {post._id}/> })

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