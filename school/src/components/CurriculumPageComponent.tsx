import React from "react";
import "../css/CurriculumPageComponent.scss"

const CurriculumPageComponent = () => {

    const fileUrl = "./GREEN TERM CALENDAR 2024-2025_064817.pdf"
    return(
        <div>
            <section className="curriculum-header curriculum-page-width-one" >
                <div className="aphc">
                    <img  src="./PHOTO-2023-07-17-20-25-40.jpg"/>
                    <h2 className="bannner-overlay">
                        Curriculum
                    </h2>
                </div>
            </section>
            <section className=" curriculum-nursery curriculum-page-width">
                <div className="curriculum-nursery-header">
                    <p>
                        A student at Honey Rock School obtains a world standard, first-class education which fosters
                        a firm foundation for future learning. Top priority is placed on seeing children learn the right
                        things, the right way in the right environment. Our curriculum is interesting, challenging, and lively
                        . Students gain academic , creative, sporting, and social skills in an out of the classroom, ensuring
                        a well-rounded learning experience for all.
                    </p>
                </div>
                <div className="curriculum-nursery-list">
                    <p>
                        At the Nursery school, we offer the Montessori Curriculum, divided into the following core curriculum areas;
                    </p>
                    <ol>
                        <li>
                            Numeracy
                        </li>
                        <li>
                            Literacy
                        </li>
                        <li>
                            Practical Life
                        </li>
                        <li>
                            Sensorial
                        </li>
                        <li>
                            Cultural
                        </li>
                    </ol>
                </div>
            </section>
            <section className=" curriculum-image curriculum-page-width">
                <div>
                    <img src="PHOTO-2023-07-17-20-25-38.jpg"/>
                </div>
                <div>
                    <img src="PHOTO-2023-07-17-20-34-35 2.jpg"/>
                </div>
            </section>
            <section className="curriculum-page-width curriculum-nursery-list">
                <p>
                    At the Primary school, we offer a blend of the British National
                    Curriculum and the Nigeran curriculum.  Subjects taught in the
                    Primary School include:
                </p>
                <ol>
                    <li>
                        English Language and Phonics
                    </li>
                    <li>
                        Mathematics
                    </li>
                    <li>
                        Science
                    </li>
                    <li>
                        Social Studies
                    </li>
                    <li>
                        Geography
                    </li>
                    <li>
                        History
                    </li>
                    <li>
                        French
                    </li>
                    <li>
                        Yoruba
                    </li>
                    <li>
                        Music
                    </li>
                    <li>
                        Information & Communication Technology
                    </li>
                    <li>
                        Arts
                    </li>
                    <li>
                        Physical & Health Education
                    </li>

                </ol>
            </section>
            <section className="curriculum-page-width curriculum-file-button" >
                <div>
                    Download the Curriculum for the Green Term
                </div>
                <div className="download-file-button">
                    {fileUrl && (
                        <a href={fileUrl} download>
                            <button>Download PDF</button>
                        </a>
                    )}
                </div>
            </section>
        </div>
    )
}
export default CurriculumPageComponent