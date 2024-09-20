import React from "react";
import "../css/SchoolMission.css"
// import missionImage from "../../public/./PHOTO-2023-07-17-20-28-17."

const SchoolMission = () => {
    return(
        <div className="school-objectives">
           <div className="mission-container objective">
                <div>
                    <header className="objective-header">Our Mission</header>
                    <p className="objective-description">
                        Our mission is to harness the potential in every pupil by inspiring a love of learning, 
                        through providing excellent education and strong moral values in a safe and healthy learning environment.
                    </p>
                    <ul className="missions">
                        <li className="mission">Building children of great character</li>
                        <li className="mission">Collaborative and Independent workers</li>
                        <li className="mission">Creative and critical thinkers</li>
                        <li className="mission">Quality producers and responsible consumers of Information and Technology</li>
                        <li className="mission">Globally, culturally and socially empathetic</li>
                        <li className="mission">Cultured</li>
                        <li className="mission">Prepared for a life of success</li>
                    </ul>
                </div>

                {/* <img src={missionImage} alt="mission" className="objective-image"/> */}
           </div>

            <div className="vision-container objective">

            </div>

        </div>

    )
}
export default SchoolMission