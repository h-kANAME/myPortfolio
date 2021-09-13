import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "./Slider.css";

const slidesInfo = [
    {
        src: "https://cdn.pixabay.com/photo/2018/02/21/09/15/mosaic-3169814_960_720.jpg" , 
        alt: "pixel",
        desc: "Ejemplo 1",
        href: <a href=""></a>
    },

    {
        src: "https://cdn.pixabay.com/photo/2017/02/02/19/52/seamless-2033681_960_720.jpg",
        alt: "pixel2",
        desc: "Ejemplo 2"
    },

    {
        src: "https://cdn.pixabay.com/photo/2018/04/13/16/13/pixel-3316924_960_720.png",
        
        alt: "bulbasaur",
        desc: "Ejemplo 3",
    },
]

const slides = slidesInfo.map(slide => (

    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} onClick={() => window.open("https://kyz.com.ar/model_static/")}    />
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>        
    </div>    

))

export default slides