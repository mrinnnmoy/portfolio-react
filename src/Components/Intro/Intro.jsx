import React from 'react';
import './Intro.css';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesemoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import GitHub from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";


const Intro = () => {
    return (
        <div className="Intro" id="Intro">
            {/* Left name side */}
            <div className="i-left">
                <div className="i-name">
                    <span>Hi, I am</span>
                    <span>Mrinmoy Porel</span>
                    <span> A senior pursuing my Bachelors in Electronics & Comm. Engg.
                        I am a self-taught programmer, trying to figure out how IT works.
                    </span>
                </div>
                <button className="button i-button">
                    Hire me
                </button>
                <div className="i-icons">
                    <a href="https://github.com/mrinnnmoy" >
                        <img src={GitHub} alt="github-logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/mrinnnmoy/">
                        <img src={LinkedIn} alt="linkedin-logo" />
                    </a>
                    <a href="https://instagram.com/" >
                        <img src={Instagram} alt="instagram-logo" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="vector-1" />
                <img src={Vector2} alt="vector-2" />
                <img src={boy} alt="profile-img" />
                <img src={glassesemoji} alt="glasses-emoji" />
                <div className="floating-1">
                    <FloatingDiv image={crown} txt1='Software' txt2='Engineering' />
                </div>
                <div className="floating-2">
                    <FloatingDiv image={thumbup} txt1='Web' txt2='Development' />
                </div>
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div className="blur" style={{ background: "#C1F5FF", top: "17rem", width: "21rem", height: "11rem", left: "-9rem" }}></div>
            </div>
        </div>
    );
};

export default Intro;