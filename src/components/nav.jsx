//Navigation Component for the Homepage, to be inserted horizontally at the top of the page.
import React from "react"
import { Link } from "react-router-dom"
export default function Navigation() {
    return (
        <div className="nav-container">
            <div className="dev-name">Kinsa Ryan</div>
            <ul className="nav-bar">
                <li className="nav-item"><Link path="/">Home</Link></li>
                <li className="nav-item">About</li>
                <li className="nav-item">Projects</li>
                <li className="nav-item">Content/Creator</li>
            </ul>
            <div className="dev-email">ryanbeclin@gmail.com</div>
        </div>

    )
}