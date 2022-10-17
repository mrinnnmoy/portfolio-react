import React from 'react';
import './Intro.css';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
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
                        I am passionate about Web & BlockChain development & I enjoy learning
                        new things.
                    </span>
                </div>
                <button className="button i-button">
                    Hire me
                </button>
                <div className="i-icons">
                    <a href="https://github.com/mrinnnmoy">
                        <img src={GitHub} alt="github-logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/mrinnnmoy/">
                        <img src={LinkedIn} alt="linkedin-logo" />
                    </a>
                    <a href="">
                        <img src={Instagram} alt="instagram-logo" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="vector-1" />
                <img src={Vector2} alt="vector-2" />
                <img src={boy} alt="profile-img" />
                <div>
                    <FloatingDiv />
                </div>
            </div>
        </div>
    );
};

export default Intro;