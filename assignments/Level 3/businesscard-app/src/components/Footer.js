import React from "react"
import twitterLogo from "../Twitter Icon.png"
import facebookLogo from "../Facebook Icon.png"
import instaLogo from "../Instagram Icon.png"
import gitHubLogo from "../GitHub Icon.png"

export default function Footer() {
    return (
        <>
            <div className ="icon-container">
                <img className = "twitter-logo" src = {twitterLogo} />
                <img src = {facebookLogo} />
                <img src = {instaLogo} />
                <img src = {gitHubLogo} />
            </div>
        </>
    )
}