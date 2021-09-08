import React from 'react'
import "./Cover.css";
import coverCoding from "../../media/coverCoding.mp4";

const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src = {coverCoding} autoPlay loop muted />
             <h1>[KYZ] Emmanuel Lopez</h1>    
             <p>Analist - Developer - Entrepreneur</p>
        </div>
    );
};

export default Cover;
