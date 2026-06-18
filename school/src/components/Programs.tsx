import React, {useRef} from 'react'
import '../css/Programs.scss'
import { RxCaretRight } from "react-icons/rx";
import Lottie from "lottie-react";
import LetterImage from '../assets/abc_8973431.png'
import animationData from '../assets/Animation - 1727268499881.json'
const Programs = () => {
  let animationRef = useRef(null)
  return (
    <div className='programme-section page-width'>
      <header className="programme-section-header">Day care, Preschool, Primary and Afterschool</header>
      <div className="programmes">
        <div className="program nursery autoShow">
            <header className='program-header '>Nursery</header>
            <p className='program-description'>Early years foundation scheme (EYFS) — it is a play based learning method.
            </p>
            <a href='/admission' className='enroll-link'>
                <button  className='enroll-button'>Enroll Now <RxCaretRight className='caret'/> </button>
            </a>
            <img src={LetterImage} alt="letter" className="letter-image fun"/>

        </div>

        <div className="program autoShow">
        <Lottie onComplete={ () => {
                    console.log('complete')
                    // animationRef.current?.setSpeed(0.1)
                }}   
                    className="back-to-school"
                    animationData={animationData}    
                    lottieRef={animationRef}       
                />   
            <header className='program-header'>Primary</header>
            <p  className='program-description'>Blended Curriculum (70% Nigeria & 30% British).
            </p>
            <a href='/admission' className='enroll-link'>
                <button  className='enroll-button'>Enroll Now <RxCaretRight className='caret'/> </button>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Programs
