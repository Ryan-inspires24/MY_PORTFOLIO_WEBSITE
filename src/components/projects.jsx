import React from "react";

export default function ProjectsSection() {
    return (
        <div className="projects">
            <div className="project-head">
                <h3>PROJECTS</h3>
                <h2>Selected Work</h2>
                <h3>All Projects</h3>
            </div>
            <div className="project-row">
                <div className="project-year"> 2024 </div>
                <img alt="project-image" className="project-image" ></img>
                <div className="project-description">
                    <h3>Caminspo</h3>
                    <p>Project Description</p>
                </div>
                <div className="project-tech">
                    <div className="tech">
                        <span>React</span>
                        <span>Node.js</span>
                        <span>Python</span>
                    </div>
                    <span className="view-project">View project</span>

                </div>
            </div>
            <div>

            </div>
            <div>

            </div>

        </div>

    )
}