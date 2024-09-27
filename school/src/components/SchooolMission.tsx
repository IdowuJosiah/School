import React, {useRef}from "react";
import "../css/SchoolMission.scss"
import missionImage from '../assets/WhatsApp Image 2024-09-23 at 4.44.30 PM 1.png'
import visionImage from '../assets/WhatsApp Image 2024-09-23 at 4.44.25 PM (2) 1.png'
import { FiCheck } from "react-icons/fi";
import ChalkBoardImage from '../assets/creativity_4651977.png'
import LetterH from '../assets/letter-h_7437025.png'
import FourImage from '../assets/4_7565079.png'

import Lottie from "lottie-react";
import animationData from '../assets/Animation - 1727268308367.json'


const SchoolMission = () => {
    let animationRef = useRef(null)
    return(
        <div className="school-objectives page-width">
           <div className="mission-container autoShow objective">
                <div className="objective-content">
                    <header className="objective-header">Our Mission</header>
                    <p className="objective-description">
                    Our mission is to harness the potential in every pupil by inspiring a love of learning, through providing excellent education and strong moral values in a safe and healthy learning environment.
                    </p>
                    <ul className="missions ">
                        <li className="mission"> <FiCheck/>Building children of great character</li>
                        <li className="mission"> <FiCheck/>Collaborative and Independent workers</li>
                        <li className="mission"> <FiCheck/>Creative and critical thinkers</li>
                        {/* <li className="mission"> <FiCheck/>Quality producers and responsible consumers of Information and Technology</li> */}
                        <li className="mission"> <FiCheck/>Globally, culturally and socially empathetic</li>
                        <li className="mission"> <FiCheck/>Cultured</li>
                        <li className="mission"> <FiCheck/>Prepared for a life of success</li>
                    </ul>
                </div>
               
                <img src={missionImage} alt="mission" className="objective-image"/>
                <img src={LetterH} alt="h" className="h-image autoShow fun"/>
                <img src={FourImage} alt="4" className="four-image fun autoShow"/>
                <Lottie onComplete={ () => {
                    console.log('complete')
                    // animationRef.current?.setSpeed(0.1)
                }}   
                    className="lottie-fish fun"
                    animationData={animationData}    
                    lottieRef={animationRef}       
                />   
           </div>

            <div className="vision-container autoShow objective">
            <div className="objective-content">
                    <header className="objective-header">Our Vision</header>
                    <p className="objective-description">
                    To be the most preferred and trusted school for raising God fearing global changers.
                    </p>
                    <ul className="missions">
                        <li className="mission"> <FiCheck/>Building children of great character</li>
                        <li className="mission"> <FiCheck/>Collaborative and Independent workers</li>
                        <li className="mission"> <FiCheck/>Creative and critical thinkers</li>
                        {/* <li className="mission"> <FiCheck/>Quality producers and responsible consumers of Information and Technology</li> */}
                        <li className="mission"> <FiCheck/>Globally, culturally and socially empathetic</li>
                        <li className="mission"> <FiCheck/>Cultured</li>
                        <li className="mission"> <FiCheck/>Prepared for a life of success</li>
                    </ul>
                </div>
             
                <img src={visionImage} alt="mission" className="objective-image"/>
              
                <img src={ChalkBoardImage} alt="chalkboard" className="chalkboard-image fun"/>
            </div>

        </div>

    )
}
export default SchoolMission