import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Emnmanuel Lopez</h1>
                {/* <p>Analista de Sistemas</p> */}
                <p>Analizando tu traje a medida</p>
            </div>
            <div className="footer-contact">
                {/* <p>Analicemos tu traje a medida</p> */}
            </div>
            <div className="footer-sns">
                {/* <div className="contact">Contacto KYZ</div> */}
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/emmanuel-lopez-4b4061128/" target="_blank">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/h-kANAME" target="_blank">
                        <i className="fab fa-github github"></i>
                    </a>
                </div>
            </div>

        </footer>
    )
}

export default Footer
