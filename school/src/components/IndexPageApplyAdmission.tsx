import "../css/IndexPageApplyAdmission.css"
import React from "react";
import Button from "./ButtonApply";


const IndexPageApplyAdmission = () => {
    return (
        <div className="index-apply-for-admission">
            <div className="index-apply-main-container">
                <div className="container">
                    <div className="text">
                        <div className="innertext">
                            <header>
                                APPLY FOR ADMISSION
                            </header>
                            <p>We stand proudly as one of the premier British international schools in Lagos,
                                Nigeria, committed to providing a comprehensive education that empowers our students
                                to cultivate essential life skills and achieve remarkable academic success
                                . Below is an overview of our meticulous admission process.</p>
                            <a href="www.google.com"> <Button /> </a>
                        </div>

                    </div>
                    <div className="image">
                        <img alt="banner" src="./indexpageimage3.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IndexPageApplyAdmission