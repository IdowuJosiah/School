import React from "react";
import "../css/Comp.css"
import {AiFillCheckCircle} from "react-icons/ai"

const Comp = () => {
    return(
        <div className="comp-container">
            <div className="comp-div">
                <img alt="banner" src="./PHOTO-2023-07-17-20-25-38.jpg"/>
                <div className="comp-overlay">
                    <div className="comp-text">
                        <h2>
                            CREATING A SOLID FOUNDATION
                        </h2>    
                    </div>
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
                            <ul className="mission-list">
                                <li>
                                    <AiFillCheckCircle /> Building children of great character
                                </li>
                                <li>
                                    <AiFillCheckCircle/> Collaborative and Independent workers
                                </li>
                                <li>
                                    <AiFillCheckCircle/>  Creative and critical thinkers
                                </li>
                                <li>
                                    <AiFillCheckCircle/> Quality producers and responsible consumers of Information and Technology
                                </li>
                                <li>
                                    <AiFillCheckCircle/> Globally, culturally and socially empathetic
                                </li>
                                <li>
                                    <AiFillCheckCircle/>  Cultured
                                </li>
                                <li>
                                    <AiFillCheckCircle/> Prepared for a life of success
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