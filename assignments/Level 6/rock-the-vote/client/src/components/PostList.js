import React from "react"
import Post from "./Post"

function PostList(props) {
    const { post } = props
    return (
        <>
            <div className = "post-list">
                { post.map(post => <Post {...post} key = {post._id}/> )}
            </div>
        </>
    )
}

export default PostList