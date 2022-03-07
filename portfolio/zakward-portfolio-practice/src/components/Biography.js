import React from "react"
import "../Styles.css"
import profilePic from "../profilepic.jpg"
import profilePic2 from "../profilepic2.jpg"
import email from "../391-mail4.png"
import github from "../433-github.png"
import linkedIn from "../458-linkedin.png"

function Biography() {
    return (
        <>
            <div id = "bio-link" className = "bio-wrapper">
                <div className = "profile-wrapper">
                    <img  className = "profile-img" src = {profilePic2} />
                    <h2 className = "profile-name">Zak Ward</h2>
                    <h3 className = "profile-description">Web Development</h3>
                    <div className = "icon-container">
                        <a href = "mailto: zakward85@gmail.com"><div className = "icon email"></div></a>
                        <a href = "https://github.com/zakward" target = "_blank" rel="noreferrer" ><div className = "icon github"></div></a>
                        <a href = "https://www.linkedin.com/in/zakmward/" target = "_blank" rel="noreferrer" ><div className = "icon linkedIn"></div></a>
                    </div>
                </div>
                <div className = "biography-container">
                    <h1 className = "biography-title">Biography</h1>
                    <p className = "biography">Hi, I’m Zak Ward, currently enrolled at VSchool as a web development student.  I currently maintain a Department of Defense Top Secret Clearance.  I have a Bachelor’s Degree in Communications from the University of Central Arkansas.</p>
                    <p className = "biography">Previously, I worked as a Signal Officer in the United States Army, where I served as advisor to the Battalion Commander on all matters concerning communications, information technology, information security, and network management.  Aside from work, I am a conundrum of a man who has a passion for technology and web development as well as a love for the great outdoors.</p>   
                    <p className = "biography">I want to use my top talents of leadership and loyalty and my top passion of helping others to educate and support others transition into Web Development and Tech.</p>  
                </div>
                <div className = "skills-container">
                    <div className = "tech-skills-container">
                        <h2 className = "skills-title">Technical Skills</h2>
                        <ul className = "skills-list">
                            <li>Javascript</li>
                            <li>React</li>
                            <li>HTML/CSS</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Mongoose/MongoDB</li>
                        </ul>
                    </div>
                    <div className = "interpersonal-skills-container">
                        <h2 className = "skills-title">Interpersonal Skills</h2>
                        <ul className = "skills-list">
                            <li>Problem Solving</li>
                            <li>Critical Thinking</li>
                            <li>Loyalty</li>
                            <li>Communication</li>
                            <li>Teamwork</li>
                            <li>Accuracy</li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Biography