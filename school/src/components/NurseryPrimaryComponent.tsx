import React from 'react'
import AboutBannerImage from '../assets/Rectangle 12.png';
import CaretRightImage from '../assets/Group.png';
import CaretLeftImage from '../assets/Group (1).png';
import ProgramImage from '../assets/WhatsApp Image 2024-09-20 at 05.46.05_80d8c0c1.png'
import ProgramImage2 from '../assets/WhatsApp Image 2024-09-20 at 05.46.07_a35db3a1.png'
import '../css/NurseryPrimaryComponent.scss'
// import { FaBicycle } from 'react-icons/fa6';
import { GiSteampunkGoggles } from 'react-icons/gi';
import BulletTrain from '../assets/bullet-train_svgrepo.com.png'
import Kite from '../assets/kite_svgrepo.com.png'
import BookImage from '../assets/book_svgrepo.com.png'
import ContentImage from '../assets/content_svgrepo.com.png'
import VolleyBallImage from '../assets/volleyball-2_svgrepo.com.png'
import MusicNotesImage from '../assets/music-notes_svgrepo.com.png'
const NurseryPrimaryComponent = () => {
  return (
  <div>
     <div className="school-banner-container">
          <img src={AboutBannerImage} className='banner-image' alt='about-banner' />
          <div className="school-container-overlay">
            <header>Nurturing Growth from Nursery to Primary </header>
            <p>Empowering Children with Knowledge, Creativity, and Confidence</p>
            <button>Explore Our Programs <GiSteampunkGoggles/> </button>
          </div>
        </div>
      <div className='page-width'>
       

      
        <div className='school-program-header reg'>Nursery School Program <img className='caret' src={CaretRightImage} alt='caret-right'/> </div>

        <div className="school-program-container ">
        <div className='school-program-image'>
            
            <img src={ProgramImage} alt='program'/>
          </div>

          <div className='school-program-text'>
            <header className='welcome-header'>Welcome to Early Learning Adventures</header>
            <p>At our Nursery, we believe in fostering a love for learning in the early years through a play-based, child-centered approach.</p>
            <header className='feature-header'>Key Features</header>
            <ul className='features'>
                <li className='feature'><img src={BulletTrain} alt='kite'/>Play-Based Learning</li>
                <li className='feature'><img src={BookImage} alt='kite'/>Early Literacy and Numeracy</li>
                <li className='feature'><img src={Kite} alt='kite'/>Creative Arts and Physical Play</li>
            </ul>
            <button className='contact-button'>Contact Us To Learn More </button>
          </div>

          
        </div>

        <div className='school-program-header alt'> <img className='caret left' src={CaretLeftImage} alt='caret-right'/> Primary School Program  </div>
        <div className="school-program-container alt">
        <div className='school-program-image'>
            
            <img src={ProgramImage2} alt='program'/>
          </div>

          <div className='school-program-text'>
            <header className='welcome-header'>Empowering Young Minds for Tomorrow</header>
            <p>We provide a balanced curriculum that not only focuses on academic excellence but also on the social and emotional development of each child.</p>
            <header className='feature-header'>Key Features</header>
            <ul className='features'>
                <li className='feature'><img src={ContentImage} alt='kite'/>Core Subjects</li>
                <li className='feature'><img src={MusicNotesImage} alt='kite'/>Creative Arts & Music</li>
                <li className='feature'><img src={VolleyBallImage} alt='kite'/>Physical Education</li>
            </ul>
            <button className='contact-button'>Contact Us To Learn More </button>
          </div>

          
        </div>
        
        </div>
    
  </div>
  )
}

export default NurseryPrimaryComponent
