import React, {useState, useEffect} from 'react'
import {slideShow} from "../interfaces/interface";
import "../css/Slider.css"

const Slider = () => {

    const slideShowItems: slideShow[] = [
        {
            background : "./national-cancer-institute-xDSD3Vmzh70-unsplash.jpg",
            bannerText: "Welcome To Our School"
        },
        {
            background : "./tim-mossholder-WE_Kv_ZB1l0-unsplash.jpg",
            bannerText: "An adventure awaits you in each class"
        },
        {
            background : "./kenny-eliason-zFSo6bnZJTw-unsplash.jpg",
            bannerText: " CLick Here to Register"
        }
    ]

    let [index, setIndex] = useState(0);
    let delay = 4000

    useEffect(() => {
        setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === slideShowItems.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {};
      }, [index]);


  return (
    <div className="slideshow">
      <div
       className="slideshowSlider "
       style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
       >
        {
            slideShowItems.map((slide, index)=> {
                return  <div className="slide" key={index}>
                        
                          <img className='slide-image' src={slide.background} alt='#'/>
                          
                          <div className="slide-overlay">
                              <div className='slide-banner'>
                                    <p>{slide.bannerText}</p>
                                <button> Register</button>
                              </div>
                            
                          </div>
                </div>
            })
        }
      </div>
      
    </div>
  )
}

export default Slider
