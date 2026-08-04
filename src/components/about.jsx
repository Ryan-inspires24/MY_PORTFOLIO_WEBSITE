import React from "react";

export default function AboutSection() {
    return (
        <div className="about-section">
            <div className="about-sec1">
                <h3>ABOUT</h3>
            </div>
            <div className="about-sec2">
                <h1 className="about-heading">I build software <span className="blue">people love.</span></h1>
                <p className="about-p">Two years into software development after an intensive training program, I build real-life solutions to real-life problems — not just code that runs, but products that actually change how people work and live. I care deeply about bridging the digital divide, especially for youth who deserve the same access to technology and opportunity that shaped my own path.
                </p>
                <p className="about-p">When I'm not shipping code, I create developer content for a growing community — breaking down complex topics into clear, practical lessons that make software feel less intimidating and more within reach.
                </p>
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
                            03
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
                            04
                        </p>
                    </div>


                </div>


            </div>
        </div>
    )
}