import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css"
import Slides from "./Slides";
import "./Slider.css";

//npm install @brainhubeu/react-carousel
//https://brainhubeu.github.io/react-carousel/docs/examples/multipleSlides

const Slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>Mis Proyectos</h2>
            </div>

            <Carousel
                arrows
                slidedesPerPage={3}
                infinite
                animationSpeed={200}
                centered
                offset={50}
                itemWidth={400}
                slides={Slides} //Properties de Slides.js
                breakpoints={{
                    960: {
                        sliderPerPage:1,
                        arrows: false,
                        itemWidth:250,
                    },
                }}
            />

        </div>
    )
}

export default Slider
