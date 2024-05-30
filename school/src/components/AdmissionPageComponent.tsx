import React from "react"
import "../css/AdmissionPageComponent.css"
const AdmissionPageComponent = () => {
    return(
        <div className="admission-page-width">
            <header className="admission-header">
                <img alt="header-image" src="back-school-stationery-education-element-empty-banner-cartoon-yellow-background-3d-illustration.jpg"/>
            </header>
            <div className="admission-body">
                <h2>
                    STEPS TO APPLY FOR ADMISSION
                </h2>
            </div>
            <div className="enrollment-process">
                <ul className="enrollment-list">
                    <li>
                        <h3>
                            Information Session:
                        </h3>
                        <p>
                            This is the initial step where prospective students and their parents/guardians are invited to attend
                            an information session. During this session,
                            the school provides details about its programs, curriculum, facilities, and any other relevant information.
                        </p>
                    </li>
                    <li>
                        <h3>
                            Purchase of Application Package
                        </h3>
                        <p>
                            After attending the information session and deciding to apply,
                            families typically need to purchase an application package.
                            This package contains all the necessary forms, guidelines,
                            and documents required for the application process.
                            It's important for families to carefully review and c
                        </p>
                    </li>
                    <li>
                        <h3>
                            Assessment/Placement
                        </h3>
                        <p>
                            Once the application is submitted, the school may conduct
                            assessments or placement tests to evaluate the student's
                            academic abilities, skills, and knowledge.
                        </p>
                    </li>
                    <li>
                        <h3>
                            Receive an Acceptance Letter
                        </h3>
                        <p>
                            After the assessment process, the school reviews applications
                            and assessments to make admission decisions. If the student is accepted,
                            the school sends an official acceptance letter to the family.
                            This letter typically outlines the terms and conditions of enrollment,
                            including tuition fees, enrollment deadlines, and any other important details.
                        </p>
                    </li>
                    <li>
                        <h3>
                            Interview with Parent & Child
                        </h3>
                        <p>Some schools may require an interview with both the student and their parent or guardian.
                            This interview is an opportunity for the school to get to know the family and the student better.

                        </p>
                    </li>
                    <li>
                        <h3>
                            Letter of Admission & Bill
                        </h3>
                        <p>
                            After the interview (if applicable), the school sends a formal letter of admission.
                            This letter officially confirms the student's enrollment in the school.
                            Along with the admission letter, families receive a bill or invoice outlining the
                            tuition and fees for the upcoming academic term. Families are expected to make the necessary
                            payments as per the school's policies
                        </p>
                    </li>
                    <li>
                        <h3>
                            Welcoming - Greet & Meet
                        </h3>
                        <p>
                            To ensure a smooth transition, many schools host a welcoming event or orientation for new
                            students and their families. This event allows new students to meet teachers, staff, and
                            fellow students.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default AdmissionPageComponent