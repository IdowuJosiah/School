import React from "react";
import "../css/ParentsReview.css"
import {useState} from "react";
import {reviewDetails} from "../interfaces/interface";
import ButtonSlider from "./ButtonSlider"

const ParentsReview = () => {
    const [slideIndex, setSlideIndex] = useState<number>(0)


    const reviews: reviewDetails[]=[
        {
            parentImage: "./aiony-haust-3TLl_97HNJo-unsplash.jpg",
            parentReview:"Honeyrock Academy has exceeded my expectations in every way. From the nurturing environment to the dedicated staff, my child's educational journey here has been nothing short of exceptional. The emphasis on fostering a love for learning and promoting individual growth is truly commendable. The warm and welcoming atmosphere makes it clear that Honeyrock is more than just a school; it's a place where children thrive and create lasting memories.",
            parentName:" Mrs Pail Sodipo"
        },
        {
            parentImage: "./albert-dera-ILip77SbmOE-unsplash.jpg",
            parentReview:"I am so grateful to have found Honeyrock Academy for my child's early education. The personalized attention each student receives is truly remarkable. The teachers' genuine care for their students' success is evident in every interaction. The well-rounded curriculum, encompassing academics, arts, and character development, ensures that my child is not only excelling academically but also growing into a well-rounded individual. Honeyrock Academy is undoubtedly a gem in the realm of education.",
            parentName:"Mr James Ibitoye"
        },
        {
            parentImage: "./alyona-grishina-JQGxnrGOkEI-unsplash.jpg",
            parentReview:"Honeyrock Academy has set the bar high when it comes to creating a supportive and enriching learning environment. The teachers' dedication to igniting curiosity and fostering critical thinking skills has made a significant impact on my child's educational journey. The school's commitment to maintaining a strong partnership with parents further enhances the sense of community. Honeyrock Academy is where my child's academic foundation is being built with care, creativity, and excellence.",
            parentName:" Mr Samuel Ejiofor"
        },
        {
            parentImage: "./panitan-punpuang-OuxJHYeUYpk-unsplash.jpg",
            parentReview:"Choosing Honeyrock Academy for my child's education was undoubtedly one of the best decisions I've made. The school's holistic approach to education, combined with its modern facilities, creates an ideal setting for learning and growth. I've watched my child flourish not only academically but also in terms of character development. The values instilled here are shaping my child into a responsible and empathetic individual. Honeyrock Academy is truly a beacon of educational excellence.",
            parentName:"Mrs Nkechi Blessing"
        },
        {
            parentImage: "./vinicius-amnx-amano-0NCjjD0zGnw-unsplash.jpg",
            parentReview:" Honeyrock Academy has captured my heart with its exceptional dedication to nurturing young minds. The passion the educators bring to their classrooms is inspiring, and it's clear that they genuinely care about each student's well-being and success. The school's commitment to maintaining a vibrant and engaging curriculum keeps my child excited about learning. Honeyrock Academy provides an environment where children are valued, encouraged, and empowered to reach their full potential.",
            parentName:"Mrs Salimat"
        },
    ]
    const prevSlide = ()=>{
        if(slideIndex > 0){
            setSlideIndex(slideIndex - 1)
      }
   //     else if(slideIndex < 0){
   //         setSlideIndex(1)
    //    }  
        console.log(slideIndex)
    }  

    const nextSlide = ()=>{
        if(slideIndex < 4){
            setSlideIndex(slideIndex + 1)
        }
    //    else if(slideIndex === reviews.length){
   //         setSlideIndex(1)
    //    }
        console.log(slideIndex)

       // console.log(reviews)
    }
        function dotClick (index:number):void {
           setSlideIndex(index)
        }
    return(
        <div className="parent-review">
                <div className="parent-review-container">
                    {reviews.map((review, index)=>{
                        return <div
                            className={slideIndex === index  ? "slide-active slider-container" : "parent-review-slide"}
                            key={index}>

                            <p className="parent-image"><img alt="parents-images" src={review.parentImage}/></p>
                            <p className="parent-review-text">
                                <q> {review.parentReview} </q>
                            </p>
                            <p className="parent-name"> {review.parentName} </p>


                        </div>
                    })
                    }
                </div>
                <div 
                     className="buttonslider">
                    <ButtonSlider moveSlide={prevSlide} direction={"prev"}/>
                    <ButtonSlider moveSlide={nextSlide} direction={"next"}/>
                </div>
                <div 
                    className="container-dots">
                    {Array.from({length:5}).map((item, index)=>(
                        <div onClick={() => dotClick(index)}
                            className={slideIndex === index  ? "dot dot-active": "dot"}>
                        </div>
                    ))

                    }
                </div>
        </div>
    )
}
export default ParentsReview