import React from "react"

export default function BlogPost(props) {
    return (
        <>
            <div className = "blog-container">
                <h1 className = "blog-title">{props.title}</h1>
                <p className = "blog-subTitle">{props.subTitle}</p>
                <p className = "blog-author">Posted by <span className = "bold">{props.author}</span> on {props.date}</p>
            </div>
        </>
    )
}