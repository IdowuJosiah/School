import { useState, useEffect } from "react";
import { slideShow } from "../interfaces/interface";
import "../css/Slider.css";
import Button from "./ButtonRegister";
import { Link } from "react-router-dom";
import sliderImage1 from  "../assets/kenny-eliason-zFSo6bnZJTw-unsplash.jpg";
import sliderImage2 from  "../assets/landingpage.jpg";
import logoImage from "../assets/School logo-Photoroom.png"; // Import the logo
import sliderImage3 from  "../assets/74d433cf-cebd-40d1-a999-a1e66859cba5.jpg";


const Slider = () => {
    const slideShowItems: slideShow[] = [
        {
            background: sliderImage1,
            bannerText: "Welcome to Honey Rock",
            bannerTextDescription: 'At Honey Rock School we foster growth, creativity and love for learning in every child'
        },
        {
            background: sliderImage2,
            bannerText: "An adventure awaits you in each class",
            bannerTextDescription: 'At Honey Rock School we foster growth, creativity and love for learning in every child'
        },
        {
            background: sliderImage3,
            bannerText: " Inspiring confidence & encouraging self expression",
            bannerTextDescription: 'At Honey Rock School we foster growth, creativity and love for learning in every child'
        },
    ];

    let [index, setIndex] = useState(0);
    let delay = 10000;

    useEffect(() => {
        const intervalId = setInterval(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === slideShowItems.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => clearInterval(intervalId);
        // eslint-disable-next-line
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {slideShowItems.map((slide, index) => {
                    return (
                        <div className="slide" key={index}>
                            <img className="slide-image" src={slide.background} alt="#" />
                            <div className='navigation-emblem'>
                                {/* Use the imported logoImage */}
                                <Link to="/"><img alt="logo" src={logoImage} /></Link>
                            </div>
                            <div className="slide-overlay">
                                <div className="slide-banner">
                                    <div className="slide-text">{slide.bannerText}</div>
                                    <p className="slide-text-description">{slide.bannerTextDescription}</p>
                                    <Button />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Slider;
