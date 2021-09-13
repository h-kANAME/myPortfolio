import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div className="about-container my-3">
            <div className="about-description">
                <h3>About me</h3>
                <p>I'm Emmanuel and i'm studing for will be a a system analist.</p>
                <p>Currently i develop solutions and do design web pages tailored, in an independent way.</p>
            </div>
            <div className="about-img">
                <img src="https://wallpapercave.com/wp/wp5791762.png"
                    alt="about" width="650" height="400" />
            </div>
        </div>
    )
}

export default About
