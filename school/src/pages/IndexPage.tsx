import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Slider from "../components/Slider";
import IndexPageApplyAdmission from "../components/IndexPageApplyAdmission";
import Comp from "../components/Comp";
import Programs from "../components/Programs";
import IndexPageVirtualTourSection from "../components/IndexPageVirtualTourSection"
import Counter from "../components/Counter";
import ParentsReview from "../components/ParentsReview";
import Footer from "../components/Footer";
import Faq from "../components/Faq"
const IndexPage = () => {
  return (
    <div className='main-container'>
        <NavBar/>
        <Slider/>
        <Banner/>
        <IndexPageApplyAdmission/>
        <Comp/>
        <Programs/> 
        <IndexPageVirtualTourSection/>
        <Counter/>
        <ParentsReview/>
    </div>
  )

  /*      */

  /**
     
        <Faq/>
        <Footer/>
   */
}

export default IndexPage
