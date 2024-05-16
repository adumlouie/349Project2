import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const About = () => {
    return (
        <section className="about">
            <h1>About Me</h1>
            <div className="content">
                <div className="textContainer">
                    <h4>hi,</h4>
                    <p>
                        i'm currently a computer science major and cal state
                        fullerton. I have fun for coding, learning, and growing.
                    </p>
                    <p>
                        when i'm not programming, you can probably find me
                        skipping leg day at the gym, trying new restaurants, or
                        crocheting
                    </p>
                    <p>
                        i still have much room for growth, and i'm always open
                        to new experiences,
                        <b className="connect"> connect with me here</b>
                    </p>

                    <p className="link">
                        <a href="mailto:adumyumyum@csu.fullerton.edu">email</a>
                        <br />
                        <a href="https://github.com/adumlouie">github</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
