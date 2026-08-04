import React from "react";

export default function ContentSection() {
    return (
        <div className="content">
            <div className="content-1">
                CONTENT
            </div>
            <div className="content-2">
                <h2 className="content-heading">Beyond the <span className="blue">Codebase.</span></h2>
                <p className="content-des">Tutorials, career insights, and behind-the-scenes development content across YouTube, TikTok, and Instagram. Growing a community of curious builders — one video at a time.</p>
                <ul className="socials">
                    <li className="social"> Tiktok -- @ryan_inspires</li>
                    <li className="social"> Instagram -- @ryan_inspires</li>
                    <li className="social"> LinkedIn -- @ryan_inspires</li>

                </ul>

            </div>
            <div className="content-3">
                <div className="content-stat">
                   <span className="value">1k+</span> 
                   <span className="content-word1">Followers</span>
                    <span>across all platforms</span>   
                </div>
                <div className="content-stat">
                    <span className="value"> 30+</span>
                     <span className="content-word1">videos</span> 
                     <span> published</span> 
                </div>
                <div className="content-stat">
                   <span className="value">  50k</span>
                    <span className="content-word1"> Views</span> 
                    <span> total reach</span>
                </div>
                <div className="content-stat">
                  <span className="value"> 4.9</span> 
                  <span className="content-word1">Rating</span>
                   <span>community feedback</span>  
                </div>

            </div>
        </div>
    )
}