import React from "react";

export default function AboutSection() {
    return (
        <div className="about-section">
            <div className="about-sec1">
                <h3>ABOUT</h3>
            </div>
            <div className="about-sec2">
                <h1 className="about-heading">I build software <span>people love.</span></h1>
                <p></p>
            </div>
            <div className="about-sec3">
                <div className="capabilities-header">
                    <h3>CAPABILITIES</h3>
                </div>
                <div className="capabilities-row">
                    <div className="capability">
                        <h3 className="capability-header"> Full-Stack Development</h3>
                        <p className="capability-description">React, Node.js, Python</p>
                    </div>
                    <div>
                        <p className="capability-number">
                            01
                        </p>
                    </div>
                </div>
                <div className="capabilities-row">
                    <div className="capability">
                        <h3 className="capability-header"> Web Architecture</h3>
                        <p className="capability-description">Scalable APIs</p>
                    </div>
                    <div>
                        <p className="capability-number">
                            02
                        </p>
                    </div>
                </div>
                <div className="capabilities-row">
                    <div className="capability">
                        <h3 className="capability-header"> UI/UX Engineering </h3>
                        <p className="capability-description"> Design Systems, accessibiltiy, motion</p>
                    </div>
                    <div>
                        <p className="capability-number">

                        </p>
                    </div>

                </div>
                <div className="capabilities-row">
                    <div className="capability">
                        <h3 className="capability-header"> Social Media Management </h3>
                        <p className="capability-description"> Video editing, SEO services, content management</p>
                    </div>
                    <div>
                        <p className="capability-number">

                        </p>
                    </div>


                </div>


            </div>
        </div>
    )
}