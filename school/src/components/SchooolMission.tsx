import React from "react";
import "../css/SchoolMission.scss"
import missionImage from '../assets/PHOTO-2023-07-17-20-28-17.jpg'
import visionImage from '../assets/image (1).png'
import { FiCheck } from "react-icons/fi";

const SchoolMission = () => {
    return(
        <div className="school-objectives page-width">
           <div className="mission-container objective">
                <div className="objective-content">
                    <header className="objective-header">Our Mission</header>
                    <p className="objective-description">
                        Our mission is to harness the potential in every pupil by inspiring a love of learning, 
                        through providing excellent education and strong moral values in a safe and healthy learning environment.
                    </p>
                    <ul className="missions">
                        <li className="mission"> <FiCheck/>Building children of great character</li>
                        <li className="mission"> <FiCheck/>Collaborative and Independent workers</li>
                        <li className="mission"> <FiCheck/>Creative and critical thinkers</li>
                        <li className="mission"> <FiCheck/>Quality producers and responsible consumers of Information and Technology</li>
                        <li className="mission"> <FiCheck/>Globally, culturally and socially empathetic</li>
                        <li className="mission"> <FiCheck/>Cultured</li>
                        <li className="mission"> <FiCheck/>Prepared for a life of success</li>
                    </ul>
                </div>

                <img src={missionImage} alt="mission" className="objective-image"/>
           </div>

            <div className="vision-container objective">
            <div className="objective-content">
                    <header className="objective-header">Our Vision</header>
                    <p className="objective-description">
                        Our mission is to harness the potential in every pupil by inspiring a love of learning, 
                        through providing excellent education and strong moral values in a safe and healthy learning environment.
                    </p>
                    <ul className="missions">
                        <li className="mission"> <FiCheck/>Building children of great character</li>
                        <li className="mission"> <FiCheck/>Collaborative and Independent workers</li>
                        <li className="mission"> <FiCheck/>Creative and critical thinkers</li>
                        <li className="mission"> <FiCheck/>Quality producers and responsible consumers of Information and Technology</li>
                        <li className="mission"> <FiCheck/>Globally, culturally and socially empathetic</li>
                        <li className="mission"> <FiCheck/>Cultured</li>
                        <li className="mission"> <FiCheck/>Prepared for a life of success</li>
                    </ul>
                </div>

                <img src={visionImage} alt="mission" className="objective-image"/>
            </div>

        </div>

    )
}
export default SchoolMission