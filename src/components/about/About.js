import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-description">
                <h3>Acerca de mi</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet,
                    consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                    dolor sit amet, consectetur adip</p>
            </div>
            <div className="about-img">
                <img src="https://steamuserimages-a.akamaihd.net/ugc/1039715510741061360/700827A6B2092E690F44C82AD975BDC2A314727A/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="about" />
            </div>
        </div>
    )
}

export default About
