import React from "react";

export default function ContentSection() {
    return (
        <div className="content">
            <div className="content-1">
                CONTENT
            </div>
            <div className="content-2">
                <h2>Beyond the <span>Codebase.</span></h2>
                <p>Tutorials, career insights, and behind-the-scenes development content across YouTube, TikTok, and Instagram. Growing a community of curious builders — one video at a time.</p>
                <ul className="socials">
                    <li> Tiktok -- @ryan_inspires</li>
                    <li> Instagram -- @ryan_inspires</li>
                    <li> LinkedIn -- @ryan_inspires</li>

                </ul>

            </div>
            <div className="content-3">
                <div className="content-stat">
                   <span>1k+</span> 
                   <span>Followers</span>
                    <span>across all platforms</span>   
                </div>
                <div className="content-stat">
                    <span> 30+</span>
                     <span>videos</span> 
                     <span> published</span> 
                </div>
                <div className="content-stat">
                   <span>  50k</span>
                    <span> Views</span> 
                    <span> total reach</span>
                </div>
                <div className="content-stat">
                  <span> 4.9</span> 
                  <span>Rating</span>
                   <span>community feedback</span>  
                </div>

            </div>
        </div>
    )
}