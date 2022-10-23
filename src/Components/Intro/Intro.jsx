import React from 'react';
import './Intro.css';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesemoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Github from "@iconscout/react-unicons/icons/uil-github";
import { themeContext } from "../../Context";
import { useContext } from 'react';


const Intro = () => {

    // Context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="Intro" id="Intro">
            {/* Left name side */}
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? "white" : "" }}>Hi, I am</span>
                    <span>Mrinmoy Porel</span>
                    <span> A senior pursuing my Bachelors in Electronics & Comm. Engg. I am
                        <br />
                        a self-taught programmer, trying to figure out how IT works.
                    </span>
                </div>
                <button className="button i-button">
                    Hire me
                </button>
                <div className="i-icons">
                    <Linkedin color="orange" size={"5rem"} />
                    <Twitter color="orange" size={"5rem"} />
                    <Github color="orange" size={"5rem"} />
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