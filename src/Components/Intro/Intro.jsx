import React, { useContext } from 'react';
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
import { motion } from "framer-motion";


const Intro = () => {
    // Transition
    const transition = { duration: 2, type: "spring" };

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
                    <a href="https://github.com/mrinnnmoy">
                        <Github color="orange" size={"5rem"} />
                    </a>
                    <a href="https://linkedin.com/in/mrinnnmoy">
                        <Linkedin color="orange" size={"5rem"} />
                    </a>
                    <a href="https://twitter.com/mrinnnmoy">
                        <Twitter color="orange" size={"5rem"} />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="vector-1" />
                <img src={Vector2} alt="vector-2" />
                <img src={boy} alt="profile-img" />
                {/* Animation */}
                <motion.img initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={{ transition }}
                    src={glassesemoji}
                    alt="glasses-emoji"
                />
                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={{ transition }}
                    className="floating-1">
                    <FloatingDiv image={crown} txt1='Software' txt2='Engineering' />
                </motion.div>
                <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    className="floating-2">
                    <FloatingDiv image={thumbup} txt1='Web' txt2='Development' />
                </motion.div>
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div className="blur" style={{
                    background: "#C1F5FF",
                    top: "17rem",
                    width: "21rem",
                    height: "11rem",
                    left: "-9rem"
                }}>
                </div>
            </div>
        </div>
    );
};

export default Intro;