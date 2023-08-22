import React from "react";
import "../components/NavBar"
import "../components/Footer"
import "../components/NurseryPrimaryComponent"
import NavBar from "../components/NavBar";
const NurseryPrimary = () => {
    return(
        <div>
            <NavBar/>
            <NurseryPrimary/>
        </div>
    )
}
export default NurseryPrimary