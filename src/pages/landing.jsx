//Landing page that contains all the sections of the website.

import React from "react"
import Navigation from "../components/nav"
import SubHeader from "../components/subheader"
import Hero from "../components/hero"
import AboutSection from "../components/about"

export default function HomePage() {
    return (
        <>
            <Navigation />
            <SubHeader/>
            <Hero/>
            <AboutSection/>
        </>
    )

}