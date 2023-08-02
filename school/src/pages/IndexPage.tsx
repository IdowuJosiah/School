import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Slider from "../components/Slider";
import IndexPageApplyAdmission from "../components/IndexPageApplyAdmission";
import Comp from "../components/Comp";
import Programs from "../components/Programs";
const IndexPage = () => {
  return (
    <div className='main-container'>
      <NavBar/>
      <Slider/>
        <Banner/>
        <IndexPageApplyAdmission/>
        <Comp/>
        <Programs/>
    </div>
  )
}

export default IndexPage
