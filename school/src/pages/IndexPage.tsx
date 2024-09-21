import React from 'react'
import NavBar from '../components/NavBar'
// import Banner from '../components/Banner'
import Slider from "../components/Slider";
import '../css/NavBar.scss'
import Values from '../components/Values';
// import IndexPageApplyAdmission from "../components/IndexPageApplyAdmission";
import SchoolMission from "../components/SchooolMission";
import Programs from "../components/Programs";
// import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
// import IndexPageVirtualTourSection from "../components/IndexPageVirtualTourSection"
// import Counter from "../components/Counter";
// import ParentsReview from "../components/ParentsReview";
import Footer from "../components/Footer";
// import Faq from "../components/Faq"
// import Line from '../components/Line';
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
