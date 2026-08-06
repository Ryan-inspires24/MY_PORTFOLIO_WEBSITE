import React from "react";

export default function ProjectsSection() {
    return (
        <div className="projects">
            <div className="project-head">
                <h3 className="project-header">PROJECTS</h3>
                <h2>Selected Work</h2>
                <h3>All Projects</h3>
            </div>
            <div className="project-row">
                <div className="project-year"> 2024 </div>
                <img alt="project-image" className="project-image" ></img>
                <div className="project-description">
                    <h3>Caminspo</h3>
                    <p>An early-stage e-commerce platform for the Cameroonian market — connecting buyers and sellers directly, without logistics infrastructure.</p>
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

<div className="project-row">
    <div className="project-year"> 2024 </div>
    <img alt="project-image" className="project-image" src="/images/library-management.jpg"></img>
    <div className="project-description">
        <h3>Library Management System</h3>
        <p>A desktop application for managing book inventory, member records, and borrowing workflows in a school library.</p>
    </div>
    <div className="project-tech">
        <div className="tech">
            <span>Python</span>
        </div>
        <span className="view-project">View project</span>
    </div>
</div>

<div className="project-row">
    <div className="project-year"> 2023 </div>
    <img alt="project-image" className="project-image" src="/images/tourism-website.jpg"></img>
    <div className="project-description">
        <h3>Tourism Website</h3>
        <p>A responsive website showcasing tourist destinations, built with a relational database for managing listings and bookings.</p>
    </div>
    <div className="project-tech">
        <div className="tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>SQL</span>
        </div>
        <span className="view-project">View project</span>
    </div>
</div>
        </div>

    )
}