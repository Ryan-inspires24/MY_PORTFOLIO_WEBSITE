//Hero section 

import React from "react";

export default function Hero() {
    return (
        <>
            <div className="hero-section">
                <div className="hero-text">
                    <p className="hero-main-text">Crafting <span>digital </span> experiences <span>that matter.</span> </p>
                    <p className="hero-intro-text">I'm Kinsa Ryan Beclin-- turning real problems into clean, purposeful software, sharing insights on both self-improvement and web development on my platforms.</p>
                    <ul className="hero-nav">
                        <li className="hero-nav-item">View work</li>
                        <li className="hero-nave-item">Get in touch</li>
                    </ul>
                </div>
                <div className="hero-image">
                    <img src='' alt="hero-image" className="dev-portrait"></img>
                    <p className="image-text">Based in Yaounde and Buea</p>
                </div>
            </div>
        </>
    )
}