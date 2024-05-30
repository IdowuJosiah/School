import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AdmissionPageComponent from "../components/AdmissionPageComponent"

const AdmissionPage =() => {
    return(
        <div>
            <NavBar/>
            <AdmissionPageComponent/>
            <Footer/>
        </div>
    )
}
export default AdmissionPage