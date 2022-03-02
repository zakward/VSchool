import React, {useState} from "react"
import "../Styles.css"
import ProjectData from "../ProjectData"
import Project from "../components/Project"

function ProjectsList() {

    const projects = ProjectData

    const projectElements = projects.map((project, index) => {
        return <Project {...project} key = {index} />
    })


    return (
        <>
            <div id = "project-link" className = "project-wrapper">
                <h1 className = "projects-header">Projects</h1>
                
                {projectElements}
            </div>
        </>
    )
}

export default ProjectsList