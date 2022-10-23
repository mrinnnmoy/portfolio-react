import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./MrinmoyPorel_CV.pdf";
import { themeContext } from "../../Context";
import { useContext } from 'react';

const Services = () => {

    // Dark Mode
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

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
                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={"Fundamentals"}
                        detail={"DSA, Computer Network, DBMS, Operating System"}
                    />
                </div>

                {/* 2nd Card */}
                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={"Web Development"}
                        detail={"React, NextJS, Node, Express, Typescript, MongoDb"}
                    />
                </div>

                {/* 3rd Card */}
                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={"Blockchain Development"}
                        detail={"Fundamentals, Cryptograhy, Solidity, web3.js, IPFS, Hardhat"}
                    />
                </div>

                <div className="blur s-blur2" style={{ background: "var(--purple)" }}>
                </div>
            </div>
        </div>
    )
}

export default Services;
