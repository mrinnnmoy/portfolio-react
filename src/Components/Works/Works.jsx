import React from 'react';
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

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
                        <img src={Upwork} alt="upwork-logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="upwork-logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="upwork-logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="upwork-logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="upwork-logo" />
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
