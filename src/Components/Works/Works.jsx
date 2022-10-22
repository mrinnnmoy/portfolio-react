import React from 'react';
import "./Works.css";
import SDE from "../../img/w-sde.png";
import GitHub from "../../img/w-github.png";
import LinkedIn from "../../img/w-linkedin.png";
import Hashnode from "../../img/w-hashnode.png";
import Twitter from "../../img/w-twitter.png";


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

            {/* Right-side */}
            <div className="w-right">
                <div className="w-mainCircle">

                    <div className="w-secCircle">
                        <img src={GitHub} alt="upwork-logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Hashnode} alt="upwork-logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={SDE} alt="sde-logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={LinkedIn} alt="upwork-logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Twitter} alt="upwork-logo" />
                    </div>
                </div>
                {/* Bg circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    );
};

export default Works;
