import React from "react";

export default function ContactSection() {
    return (
        <div className="contact">
            <div className="contact-1">CONTACT</div>

            <div className="contact-2">
                <h2>Let's build <span className="blue">Something.</span></h2>
                <p>Have a project, a question, or just want to say hello -- I read every message and will respond within a day/</p>
                <span>ryanbeclin@gmail.com</span>
            </div>
            <div className="contact-3">
                <p>NAME</p>
                <input type="text" id="name" />
                <p>EMAIL</p>
                <input type="email" id="email" />
                <p>MESSAGE</p>
                <input type="text" id="message" />
                <input type="button" id="message-btn" value='Send Message'/>

            </div>
        </div>
    )
}