import React from "react"
import NavBar from "../components/NavBar";
import Footer from  "../components/Footer"
import GalleryPageComponent from "../components/GalleryPageComponent";
const GalleryPage =() => {
    return(
        <div>
            <NavBar/>
            <GalleryPageComponent/>
            <Footer/>
        </div>
    )
}
export default GalleryPage