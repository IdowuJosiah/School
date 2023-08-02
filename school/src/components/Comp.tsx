import React from "react";
import "../css/Comp.css"

const Comp = () => {
    return(
        <div className="comp-container">
            <div className="comp-div">
                <img alt="banner" src="./PHOTO-2023-07-17-20-25-38.jpg"/>
                <div className="comp-text">
                    <h2>
                        CREATING A SOLID FOUNDATION
                    </h2>
                </div>
            </div>
            <div className="mission">
                <div className="mission-container">
                    <div className="mission-text">
                            <span className="mission-header">
                                Mission: our mission is to harness the potential in every pupil
                                by inspiring a love of learning,
                                through providing excellent education and strong moral
                                values in a safe and healthy learning environment
                            </span>
                            <ul>
                                <li>
                                    Leaders of great character
                                </li>
                                <li>
                                    Collaborative and Independent workers
                                </li>
                                <li>
                                    Creative and critical thinkers
                                </li>
                                <li>
                                    Quality producers and responsible consumers of Information and Technology
                                </li>
                                <li>
                                    Globally, culturally and socially empathetic
                                </li>
                                <li>
                                    Cultured
                                </li>
                                <li>
                                    Prepared for a life of success
                                </li>
                            </ul>
                    </div>
                    <div className="mission-image">

                            <img src="./PHOTO-2023-07-17-20-28-14 (2).jpg"/>

                    </div>
                </div>

            </div>
        </div>

    )
}
export default Comp