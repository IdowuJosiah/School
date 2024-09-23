import "../css/AdmissionPageComponent.scss"
import React from 'react'
import BannerComponent from "./BannerComponent"
import AdmissionBannerImage from '../assets/WhatsApp Image 2024-09-23 at 4.44.24 PM 1.png'
import StepImage from '../assets/Frame 1000003446.png'
import StepImage2 from '../assets/Frame 1000003471.png'
import StepImage3 from '../assets/Frame 1000003445.png'
import StepImage4 from '../assets/Frame 1000003445 (1).png'
import StepImage5 from '../assets/Frame 1000003445 (2).png'
import StepImage6 from '../assets/Frame 1000003469.png'
import StepImage7 from '../assets/Frame 1000003445 (3).png'


const AdmissionPageComponent = () => {
  return (
    <div className="admission-section"> 
         <BannerComponent
        title='Admission 2023/2034'
        image={AdmissionBannerImage}
        description='Nursery and Primary'
        buttonInformation={
          <>
            Enroll Now
          </>
        }
      />

      <div className="admission-steps-section page-width">
        <div className="admission-header">
            <header className="main-header">Steps To Apply For Admission</header>
            <p className="instruction">Follow these easy steps to start your journey with us and secure your place at our school.</p>
        </div>

        <div className="steps-container">
            <div className="step">
                <div className="step-header-content">
                    <img src={StepImage} className = 'step-image' alt="#" />
                    <header>Information Session</header>
                </div>

                <p>
                    This is the initial step where prospective students and their parents/guardians are invited to attend an information session. 
                    During this session, the school provides details about its programs, curriculum, facilities, and any other relevant information
                </p>
            </div>

            <div className="step">
                <div className="step-header-content">
                    <img src={StepImage2} className = 'step-image' alt="#" />
                    <header>Purchase of Application Package</header>
                </div>

                <p>
                After attending the information session and deciding to apply, families typically need to purchase an application package. This package contains all the necessary forms, guidelines, and documents required for the application process. It's important for families to carefully review and c
                </p>
            </div>

            <div className="step">
                <div className="step-header-content">
                    <img src={StepImage3} className = 'step-image' alt="#" />
                    <header>Assessment/Placement</header>
                </div>

                <p>
                Once the application is submitted, the school may conduct assessments or placement tests to evaluate the student's academic abilities, skills, and knowledge.
                </p>
            </div>

            <div className="step">
                <div className="step-header-content">
                    <img src={StepImage4} className = 'step-image' alt="#" />
                    <header>Receive an Acceptance Letter</header>
                </div>

                <p>
                After the assessment process, the school reviews applications and assessments to make admission decisions. If the student is accepted, the school sends an official acceptance letter to the family. This letter typically outlines the terms and conditions of enrollment, including tuition fees, enrollment deadlines, and any other important details.
                </p>
            </div>

            <div className="step">
                <div className="step-header-content">
                    <img src={StepImage5} className = 'step-image' alt="#" />
                    <header>Interview with Parent & Child</header>
                </div>

                <p>
                Some schools may require an interview with both the student and their parent or guardian. This interview is an opportunity for the school to get to know the family and the student better.
                </p>
            </div>

            <div className="step">
                <div className="step-header-content">
                    <img src={StepImage6} className = 'step-image' alt="#" />
                    <header>Letter of Admission & Bill</header>
                </div>

                <p>
                After the interview (if applicable), the school sends a formal letter of admission. This letter officially confirms the student's enrollment in the school. Along with the admission letter, families receive a bill or invoice outlining the tuition and fees for the upcoming academic term. Families are expected to make the necessary payments as per the school's policies
                </p>
            </div>

            <div className="step">
                <div className="step-header-content">
                    <img src={StepImage7} className = 'step-image' alt="#" />
                    <header>Welcoming - Greet & Meet</header>
                </div>

                <p>
                To ensure a smooth transition, many schools host a welcoming event or orientation for new students and their families. This event allows new students to meet teachers, staff, and fellow students.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdmissionPageComponent
