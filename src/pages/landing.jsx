//Landing page that contains all the sections of the website.

import React from "react"
import Navigation from "../components/nav"
import SubHeader from "../components/subheader"
import Hero from "../components/hero"
import AboutSection from "../components/about"
import ProjectsSection from "../components/projects"
import ContentSection from "../components/content"
import ContactSection from "../components/contact"
import '../main.css'

export default function HomePage() {
    return (
        <>
            <div className="top-landing">
                <Navigation />
                <SubHeader />
                <Hero />
            </div>

            <AboutSection />
            <ProjectsSection />
            <ContentSection />
            <ContactSection />
        </>
    )

}