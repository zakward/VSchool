import React from "react"
import BlogData from "./BlogData"
import BlogPost from "./BlogPost"
import ArrowPic from "./317-arrow-right2.png"

export default function BlogList() {
    const postElements = BlogData.map(post => {
        return <BlogPost
                        title = {post.title}
                        subTitle = {post.subTitle}
                        author = {post.author}
                        date = {post.date}
                        />
    })
    return (
        <>
        {postElements}
        <button className = "older-post-button">Older Posts<img className = "arrow-pic" src = {ArrowPic} /></button>
        </>
    )
}