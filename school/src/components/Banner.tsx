import "../css/Banner.css"
import React from "react";

const Banner = () => {


 return (
     <div className="registration-banner">
        <div className="summer-school-registration-entrance">
            <div className="entrance-image">
                <img alt="banner" src="./fly.png"/>
            </div>
            <div className="entrance-text">
                <h2>
                    2023 SUMMER SCHOOL SESSION
                </h2>
                <div>
                    <a href="www.google.com"> <button>Apply Here</button> </a>
                </div>
            </div>
        </div>
     </div>
 )


}

export default Banner

