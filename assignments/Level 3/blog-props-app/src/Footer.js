import React from "react"
import TwitterPic from "./407-twitter.png"
import FacebookPic from "./401-facebook.png"
import GitHubPic from "./433-github.png"


export default function Footer() { 
    return (
    <>
        <div className = "footer">
            <div className = "icons-container">
            <img src = {TwitterPic} className = "twitter-pic" />
            <img src = {FacebookPic} className = "twitter-pic" />
            <img src = {GitHubPic} className = "twitter-pic" />
            </div>
            <div>Copyright © Your Website 2021</div>
        </div>
    </>
    )
}