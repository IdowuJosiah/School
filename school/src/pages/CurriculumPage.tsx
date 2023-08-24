import React from "react";
import CurriculumPageComponent from "../components/CurriculumPageComponent";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const CurriculumPage = () =>{
    return(
        <div>
            <NavBar/>
            <CurriculumPageComponent/>
            <Footer/>
        </div>
    )
}
export default CurriculumPage