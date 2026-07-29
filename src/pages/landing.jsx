//Landing page that contains all the sections of the website.

import React from "react"
import Navigation from "../components/nav"
import SubHeader from "../components/subheader"
import Hero from "../components/hero"
import AboutSection from "../components/about"
import ProjectsSection from "../components/projects"
import ContentSection from "../components/content"
import ContactSection from "../components/contact"

export default function HomePage() {
    return (
        <>
            <Navigation />
            <SubHeader/>
            <Hero/>
            <AboutSection/>
            <ProjectsSection/>
            <ContentSection/>
            <ContactSection/>
        </>
    )

}