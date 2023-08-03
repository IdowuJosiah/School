import React from "react";
import "../css/Programs.css"
import Button from "./ButtonRegister";


const Programs = () => {
    return(
        <section className="programs-main-container">
            <div className="programs-container">
                 <div className="programs-header">
                     <p>
                         OUR SCHOOL
                     </p>
                     <h1>
                         PROGRAMMES
                     </h1>
                 </div>
                <div className="programs">
                    <div className="different-school-programs">
                            <div className="different-school-programs-container">
                                <h2>NURSERY SCHOOL</h2>
                                <p>A strong focus on core academic competencies
                                    and the development of students
                                </p>
                                <a href="www.google.com"> <Button/> </a>
                            </div>
                    </div>
                    <div className="different-school-programs">
                            <div className="different-school-programs-container">
                                <h2>PRIMARY SCHOOL</h2>
                                <p>A strong focus on core academic competencies
                                    and the development of students
                                </p>
                                <a href="www.google.com"> <Button/> </a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Programs