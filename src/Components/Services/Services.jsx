import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./MrinmoyPorel_CV.pdf";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {

    // Dark Mode
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    // Transition
    const transition = {
        duration: 1,
        typer: "spring",
    };

    return (
        <div className="services">

            {/* Left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>My Technology</span>
                <span>Skills.</span>
                <span>
                    I am passionate about Web & BlockChain development &
                    <br />
                    enjoy learning new things.
                </span>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>

            {/* Right Side */}
            <div className="cards">
                <motion.div initial={{ left: "25rem" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}>
                    <Card
                        emoji={HeartEmoji}
                        heading={"Fundamentals"}
                        detail={"DSA, Computer Network, DBMS, Operating System"}
                    />
                </motion.div>

                {/* 2nd Card */}
                <motion.div initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}>
                    <Card
                        emoji={Glasses}
                        heading={"Web Development"}
                        detail={"React, NextJS, Node, Express, Typescript, MongoDb"}
                    />
                </motion.div>

                {/* 3rd Card */}
                <motion.div initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}>
                    <Card
                        emoji={Humble}
                        heading={"Blockchain Development"}
                        detail={"Fundamentals, Cryptograhy, Solidity, web3.js, IPFS, Hardhat"}
                    />
                </motion.div>

                <div className="blur s-blur2" style={{ background: "var(--purple)" }}>
                </div>
            </div>
        </div>
    );
};

export default Services;
