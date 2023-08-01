import "../css/Banner.css"
import React from "react";
import Button from "./Button";

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

                <p>
                It's that time of the year again! Use this opportunity to help them develop new skills, make new friends, and stay active. 
                Plus, it can provide a structured environment which can be beneficial for maintaining a routine during the summer break.
                </p>

                <p>  
                 Summer coaching can also boost their confidence and self-esteem as they tackle and master new challenges. 
                 It can also help maintain their academic skills and even advance them, reducing the "summer slide". 
                 Plus, it's a chance for kids to explore and nurture their interests outside of the regular school curriculum.
                </p>
                <div>
                    <a href="www.google.com"> <Button/> </a>
                </div>
            </div>
        </div>
     </div>
 )


}

export default Banner

