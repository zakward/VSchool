import React,  { useContext } from "react"
import PostForm from "./PostForm"
import Post from "./Post"
import PostList from "./PostList"
import { UserContext } from "../context/UserProvider"

function Profile() {

    const { user: { username}, addPost, post } = useContext(UserContext)

    return (
        <>
            <div className = "profile">
                <h1>Welcome @{username}!</h1>
                <h3>Add a Post</h3>
                <PostForm addPost = {addPost} />
                <h3>Your Posts</h3>
                <PostList post = {post} />
            </div>
        </>
    )
}

export default Profile