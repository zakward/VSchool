import React from "react"
import emailLogo from "../Icon.png"
import linkedInLogo from "../Vector.png"

export default function Info() {
    return (
        <>        
            <div className = "info">
                <img className = "profile-pic" src = "https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/269787394_10106022876219777_729414203618941222_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=Fl8HRD66BnwAX9Fygnt&_nc_ht=scontent-dfw5-1.xx&oh=00_AT99J_SwWQ32lMZtKa-5bRWSG4ENorSHCVa8Wpimtfh7CA&oe=61DD8F1A" />
                <div className = "info-container">
                    <h1>Zak Ward</h1>
                    <h4>Frontend Developer</h4>
                    <p>zakward.website</p>
                    <div className = "links-container">
                        <div className = "email-container">
                            <img src = {emailLogo} />
                            <div>Email</div>
                        </div>
                        <div className = "linkedIn-container">
                            <img src = {linkedInLogo} />
                            <div>LinkedIn</div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}