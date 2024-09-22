import React from "react";
import NavBar from "../components/NavBar";
import NurseryPrimaryComponent from "../components/NurseryPrimaryComponent";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
const NurseryPrimary = () => {
    return(
        <div>
            <NavBar/>
            <NurseryPrimaryComponent/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}
export default NurseryPrimary