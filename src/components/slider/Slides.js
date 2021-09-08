import React from 'react';
import "./Slider.css";

const slidesInfo = [
    {
        src: "https://cdn.pixabay.com/photo/2018/02/21/09/15/mosaic-3169814_960_720.jpg",
        alt: "pixel",
        desc: "Pixelated"
    },

    {
        src: "https://cdn.pixabay.com/photo/2017/02/02/19/52/seamless-2033681_960_720.jpg",
        alt: "pixel2",
        desc: "Pixeled"
    },

    {
        src: "https://cdn.pixabay.com/photo/2018/04/13/16/13/pixel-3316924_960_720.png",
        alt: "bulbasaur",
        desc: "Bulbapix"
    },
]

const slides = slidesInfo.map(slide => (
    
    <div className="slide-container">
        <img src={slide.src} alt= {slide.alt}/>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>   
    
    ))

    export default slides;