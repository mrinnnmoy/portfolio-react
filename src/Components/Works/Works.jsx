import React, { useContext } from 'react';
import "./Works.css";
import SDE from "../../img/w-sde.png";
import GitHub from "../../img/w-github.png";
import LinkedIn from "../../img/w-linkedin.png";
import Hashnode from "../../img/w-hashnode.png";
import Twitter from "../../img/w-twitter.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Works = () => {

    // Context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="works">
            {/* Left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>Works from All </span>
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
                <motion.div
                    initial={{ rotate: 90 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className="w-mainCircle">

                    <div className="w-secCircle">
                        <img src={Twitter} className="w-twitter" alt="twitter-logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Hashnode} className="w-hashnode" alt="hashnode-logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={SDE} className="w-sde" alt="sde-logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={LinkedIn} className="w-linkedin" alt="linkedin-logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={GitHub} className="w-github" alt="github-logo" />
                    </div>
                </motion.div>
                {/* Bg circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    );
};

export default Works;
