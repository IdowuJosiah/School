import React from "react" ;
import "../css/AboutPageComponent.css";
import {BsLightbulb} from "react-icons/bs"

const  AboutPageComponent = () =>{
    return(
        <div className="about-page-container">
            <header className="about-page-header">
                <div className="about-page-header-container about-page-width">'
                    <h2>
                            Why Honey Rock School?
                    </h2>

                    <p className="quick-introduction">
                        We provide a nurturing environment for holistic learning and growth, encouraging a diverse and inclusive community that 
                        fosters lifelong friendships.
                    </p>
                    <div>
                            <img alt="guh" src="./74d433cf-cebd-40d1-a999-a1e66859cba5.JPG"/>
                    </div>
                </div>

            </header>
            <article className="about-article">
                <div className="about-article-container about-page-width">
                    <p>
                        Honey Rock School, founded in 2013,
                        is a nurturing educational institution dedicated to providing exceptional
                        international education to young learners in Lagos, Nigeria.
                    </p>
                    <p>
                        Our esteemed school has obtained official recognition and operating approval
                        from both the Federal Ministry of Education and the Lagos State Ministry of Education.
                        Additionally, we proudly hold accreditations from esteemed bodies like the Association
                        of Private Educators in Nigeria and the Association of International School Educators of Nigeria.
                    </p>
                    <p>
                        We take great pride in offering our students an outstanding foundation for lifelong success.
                        Our holistic approach empowers them to emerge as well-rounded individuals, equipped with the confidence,
                        determination, and commitment to excel in an ever-changing global landscape.
                    </p>
                    <p>
                        At Honey Rock School, we seamlessly blend the Montessori, British, and Nigerian curricula,
                        employing engaging and empowering teaching methods. This prepares our students for a future of
                        accomplishment and significance on a global scale.
                    </p>
                    <p>
                        Every student's educational journey at Honey Rock is marked by excellence,
                        character development, and the highest academic standards.
                        We are dedicated to crafting a rich educational experience that fosters personal
                        growth and prepares students for the challenges of tomorrow.
                    </p>
                    <p>
                        Our state-of-the-art facilities include two purpose-built campuses,
                        meticulously designed to prioritize safety and create an optimal learning environment.
                        Our classrooms feature cutting-edge digital resources such as interactive whiteboards,
                        while our dedicated ICT suite promotes digital literacy through computer-based learning.
                    </p>
                    <p>
                        The Honey Rock team comprises seasoned professionals who undergo continuous local and international training,
                        ensuring that they remain at the forefront of modern educational demands.
                        This commitment allows us to provide unparalleled guidance and support to our students,
                        fostering their intellectual and personal growth.
                    </p>
                </div>
            </article>
            <div className="about-footer-section about-page-width">
                <div className="about-list">
                    <p>
                        Honey Rock Students are
                    </p>
                    <ul>
                        <li>
                            <BsLightbulb/>
                            Individual with strong character
                        </li>
                        <li>
                            <BsLightbulb/>
                            Perpetual seeker of knowledge
                        </li>
                        <li>
                            <BsLightbulb/>
                            Producer of high-quality work
                        </li>
                        <li>
                            <BsLightbulb/>
                            Efficient collaborator
                        </li>
                        <li>
                            <BsLightbulb/>   
                            Autonomous achiever
                        </li>
                        <li>
                            <BsLightbulb/>
                            Equipped for a prosperous life
                        </li>
                    </ul>
                </div>
                <div className="about-image">
                    <p>
                        <img alt="jhgg" src="./ab961ccd-3e00-468f-86ab-4c83f383a1fa.JPG"/>
                    </p>
                </div>
            </div>
            <section className="the-team" >
                <h2>
                    THE TEAM
                </h2>
                <div className="the-team-container about-page-width">
                    <div className="school-director">
                        <p>
                            <img alt="team" src="./aiony-haust-3TLl_97HNJo-unsplash.jpg"/><div className="team-title"> <span>Honey Rock School Director</span><span>Pastor Aduke Obey</span> </div>
                        </p>
                    </div>
                    <div className="head-of-schools">
                        <div className="head-of-schools-container">
                            <p>
                                <img alt="team" src="./albert-dera-ILip77SbmOE-unsplash.jpg" /><div className="team-title"> <span>Honey Rock School Director</span><span>Pastor Aduke Obey</span> </div>
                            </p>
                            <p>
                                <img alt="team" src="./alyona-grishina-JQGxnrGOkEI-unsplash.jpg"/><div className="team-title"> <span>Honey Rock School Director</span><span>Pastor Aduke Obey</span> </div>
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default AboutPageComponent