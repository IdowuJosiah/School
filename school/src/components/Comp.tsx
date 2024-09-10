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
                        
                            Creating a Solid foundation
                         
                    </div>
                </div>
                
            </div>
            <div className="mission">
                <div className="mission-container">
                    <div className="mission-text">
                        <header>MISSION</header>
                            <span className="mission-header">
                               <p>
                                Our mission is to harness the potential in every pupil
                                by inspiring a love of learning,
                                through providing excellent education and strong moral
                                values in a safe and healthy learning environment.
                                </p>
                            </span>
                            <ul className="mission-list">
                                <div>
                                    <AiFillCheckCircle /> <span>Building children of great character</span>
                                </div>
                                <div>
                                    <AiFillCheckCircle/> <span>Collaborative and Independent workers</span>
                                </div>
                                <div>
                                    <AiFillCheckCircle/> <span> Creative and critical thinkers</span>
                                </div>
                                <div className="weird-div">
                                    <div><AiFillCheckCircle/></div> <div> Quality producers and responsible consumers of Information and Technology </div>
                                </div>
                                <div>
                                    <AiFillCheckCircle/> <span>Globally, culturally and socially empathetic</span>
                                </div>
                                <div>
                                    <AiFillCheckCircle/>  <span>Cultured</span>
                                </div>
                                <div>
                                    <AiFillCheckCircle/> Prepared for a life of success
                                </div>
                            </ul>
                    </div>
                    <div className="mission-image">

                            <img alt="logo" src="./PHOTO-2023-07-17-20-28-14 (2).jpg"/>

                    </div>
                </div>

            </div>
        </div>

    )
}
export default Comp