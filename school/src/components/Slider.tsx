import React, {useState, useEffect} from 'react'
import {slideShow} from "../interfaces/interface";
import "../css/Slider.css"
import Button from './ButtonRegister';

const Slider = () => {

    const slideShowItems: slideShow[] = [
        {
            background : "./3c15d55b-a063-431f-84d6-ced2f31f680d.JPG",
            bannerText: "Welcome To Our School"
        },
        {
            background : "./tim-mossholder-WE_Kv_ZB1l0-unsplash.jpg",
            bannerText: "An adventure awaits you in each class"
        },
        {
            background : "./74d433cf-cebd-40d1-a999-a1e66859cba5.JPG",
            bannerText: " Inspiring Confidence & Encouraging Self Expression"
        }
    ]

    let [index, setIndex] = useState(0);
    let delay = 14000

    useEffect(() => {
        setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === slideShowItems.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {};
        // eslint-disable-next-line
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
                                      
                                    
                                     <div className='slide-text'>{slide.bannerText}</div>
                                     
                                  
                                    <Button/>
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
