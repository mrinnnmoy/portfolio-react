import React from 'react';
import "./Footer.css";
import Wave from "../../img/wave.png";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} style={{ width: "100%" }} alt="wave-img" />
            <div className="f-content">
                <span class="footer__copy">
                    &#169; Mrinmoy Porel. All rights reserved.
                </span>
                <div className="f-icons">
                    <Linkedin color="white" size={"3rem"} />
                    <Twitter color="white" size={"3rem"} />
                    <Github color="white" size={"3rem"} />
                </div>
            </div>
        </div>
    )
};

export default Footer;
