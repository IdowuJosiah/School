import React from 'react'
import NavBar from '../components/NavBar'
import Slider from "../components/Slider";
import '../css/NavBar.scss'
import Values from '../components/Values';
import SchoolMission from "../components/SchooolMission";
import Programs from "../components/Programs";
import Testimonials from '../components/Testimonials';
import Footer from "../components/Footer";
const IndexPage = () => {
  return (
    <div className='main-container'>
        <NavBar/>
        <Slider/>
        <Values/>
        <SchoolMission/>
        <Programs/>
        <Testimonials/>
        <Footer/>
        {/* 
       
     
      
      
         */}
        {/* <IndexPageApplyAdmission/>
     
      
        <IndexPageVirtualTourSection/>
        <Counter/> */}

    </div>
  )

}

export default IndexPage
