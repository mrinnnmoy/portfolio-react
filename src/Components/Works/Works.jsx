import React from 'react';
import "./Works.css";

const Works = () => {
    return (
        <div className="works">
            {/* Left side */}
            <div className="awesome">
                <span>Works from All </span>
                <span>Socials & Blog.</span>
                <span>
                    Recently, started posting my learnings on public platforms.
                    <br />
                    Also started building publically and contributing to Open-source projects,
                    <br />
                    and even started my own blog.
                    <br />
                </span>
                <button className="button s-button">Hire me</button>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
        </div>
    )
}

export default Works;
