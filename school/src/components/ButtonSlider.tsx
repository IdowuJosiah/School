import React from "react";
import "../css/ParentsReview.css"
import {BiLeftArrowAlt} from "react-icons/bi"
import {BiRightArrowAlt} from "react-icons/bi"
interface props{
    direction:string,
    moveSlide: () => void
}
const ButtonSlider = ({direction, moveSlide}:props) => {
    //console.log(direction,moveSlide)
    return(
        <div className="buttonslider-icon"
             onClick={moveSlide}>
           <div>
               {direction === "next" ? <BiRightArrowAlt/>: <BiLeftArrowAlt/> }
           </div>
        </div>
    )
}
export default ButtonSlider