import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./MrinmoyPorel_CV.pdf";

const Services = () => {
    return (
        <div className="services">

            {/* Left side */}
            <div className="awesome">
                <span>My Technology</span>
                <span>Skills.</span>
                <span>
                    I am passionate about Web & BlockChain development &
                    <br />
                    I enjoy learning new things.
                </span>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>

            {/* Right Side */}
            <div className="cards">
                <div style={{left: '14rem'}}>
                    <Card 
                        emoji = {HeartEmoji}
                        heading = {"Fundamentals"}
                        detail = {"DSA, Computer Network, DBMS, Operating System"}
                    />
                </div>
            </div>

        </div>
    )
}

export default Services;
