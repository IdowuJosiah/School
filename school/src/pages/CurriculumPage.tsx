import React from "react";
import CurriculumPageComponent from "../components/CurriculumPageComponent";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

const CurriculumPage = () =>{
    return(
        <div>
            <NavBar/>
            <CurriculumPageComponent/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}
export default CurriculumPage