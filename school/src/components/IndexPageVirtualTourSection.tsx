import React from "react";
import "../css/IndexPageVirtualTourSection.css"
import Button from "./ButtonTour";

const IndexPageVirtualTourSection  = () => {
    return(
        <section className="index-virtual-tour-section">
            <div className="index-virtual-tour-container">
                <div className="index-virtual-tour-text">
                    <h1>
                        We understand that great things do not just happen, they are the result of tenacity and pushing forward.
                    </h1>
                    <div>
                        <a href="www.google.com"><Button/></a>
                    </div>
                </div>
                <div className="index-virtual-tour-image">
                        <img alt="tour"
                            src="./PHOTO-2023-07-17-20-49-24 10.jpg"/>
                </div>
            </div>
        </section>
    )
}

export default IndexPageVirtualTourSection