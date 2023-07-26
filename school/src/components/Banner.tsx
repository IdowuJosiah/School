import {slideShow} from "../interfaces/interface";
import "../css/Banner.css"
import {useEffect} from "react";
import React from "react";

const Banner = () => {
    const slideShowItems: slideShow[] = [
        {
            background : "./national-cancer-institute-xDSD3Vmzh70-unsplash.jpg",
            bannerText: "Welcome To Our School"
        },
        {
            background : "./national-cancer-institute-xDSD3Vmzh70-unsplash.jpg",
            bannerText: "Welcome To Our School"
        },
        {
            background : "./national-cancer-institute-xDSD3Vmzh70-unsplash.jpg",
            bannerText: "Welcome To Our School"
        }
    ]
 return (


    function Slideshow() {
        return (
            <div className="slideshow">
                <div className="slideshowSlider">
                    {slideShowItems.map((images, index) => (
                        <div className="slide" key={index} />
                    ))}
                </div>
            </div>
        );
    }
 )


}

export default Banner

