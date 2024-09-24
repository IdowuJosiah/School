import React from "react";
import "../css/CurriculumPageComponent.scss";
import BannerComponent from "./BannerComponent";
import CurriculumBannerImage from '../assets/WhatsApp Image 2024-09-20 at 05.46.09_e22ce82b.png';
import CaretRightImage from '../assets/Group.png';
import EllipseImage from '../assets/Ellipse 16.png';
import { PiBookOpenText } from "react-icons/pi";
import PaintImage from '../assets/Paint palette.png';
import NumbersImage from '../assets/Numbers.png';
import MilkImage from '../assets/Milk.png';
import ComputerImage from '../assets/Computer.png';
import MathsImage from '../assets/Mathematics.png';
import ScienceImage from '../assets/Chemical.png';
import HandPrint from '../assets/Hand print.png'

const curriculumFeatures = [
  {
    img: EllipseImage,
    title: "Holistic Development:",
    description: "Ensuring a balance between academic excellence, creative expression, and physical well-being."
  },
  {
    img: EllipseImage,
    title: "Inquiry-Based Learning:",
    description: "Encouraging love for learning by allowing students to explore concepts through questioning and experimentation."
  },
  {
    img: EllipseImage,
    title: "21st Century Skills:",
    description: "Equipping students with skills such as collaboration, digital literacy, and adaptability, preparing them for the world."
  }
];

const nurserySubjects = [
  {
    img: PaintImage,
    title: "Creativity & Arts",
    description: "Art, music, and role-playing activities encourage creativity."
  },
  {
    img: NumbersImage,
    title: "Numeracy",
    description: "Developing number sense through shapes, and patterns."
  },
  {
    img: MilkImage,
    title: "Social Interaction",
    description: "Play sessions to build empathy, and communication skills."
  }
];

const primarySubjects = [
  {
    img: MathsImage,
    title: "Mathematics",
    description: "Focus on problem-solving, reasoning, and arithmetic."
  },
  {
    img: ComputerImage,
    title: "ICT",
    description: "Introducing basic computer skills and responsible digital usage."
  },
  {
    img: ScienceImage,
    title: "Science",
    description: "Hands-on experiments and exploration."
  }
];

const CurriculumPageComponent = () => {
  return (
    <div>
      <BannerComponent
        title='Inspiring young minds for tomorrow’s world'
        image={CurriculumBannerImage}
        description='Nurturing creativity, curiosity, and lifelong learning through a balanced and engaging curriculum'
        buttonInformation={
          <>
            Learn More <PiBookOpenText />
          </>
        }
      />

      <div className="page-width">
        <div className="overview">
          <div className='overview-header'>
            Curriculum Overview <img className='caret' src={CaretRightImage} alt='caret-right'/>
          </div>
          <p className="overview-description">
            Here, at The Honey Rocks School, we believe that education goes beyond textbooks and exams.
            Our curriculum is designed to nurture well-rounded individuals who are not only academically proficient
            but also creative, empathetic, and prepared for the challenges of the future. Through a balanced approach
            to learning, we ensure that every student develops critical thinking, problem-solving, and social skills.
          </p>

          <header className='overview-sub-header'>Educational Philosophy</header>
          <p className="philosophy-header">
            Our curriculum is rooted in the belief that each child is unique and has the potential to excel. We focus on:
          </p>
          <ul className='features'>
            {curriculumFeatures.map((feature, index) => (
              <li className='ftr' key={index}>
                <img src={feature.img} className="ellipse" alt="ellipse"/>
                <span>{feature.title}</span> {feature.description}
              </li>
            ))}
          </ul>
        </div>

        <div className="subject-content">
          <header className="subject-container-header">Nursery Subjects</header>
          <div className="subject-container">
          {nurserySubjects.map((subject, index) => (
  <div className={`subject ${index === 2 ? 'styled-subject' : ''}`} key={index}>
    {/* HandPrint Image */}
    {index === 2 && (
      <img src={HandPrint} alt="hand-print" className="hand-print" />
    )}
    <div className="subject-image-container">
      <img src={subject.img} className="subject-image" alt="subject-jpeg" />
    </div>
    <div className="subject-text-container">
      <header className="subject-header">{subject.title}</header>
      <p className="subject-description">{subject.description}</p>
    </div>
  </div>
))}

          </div>

          <header className="subject-container-header">Primary Subjects</header>
          <div className="subject-container">
            {primarySubjects.map((subject, index) => (
              <div className="subject" key={index}>
                <div className="subject-image-container">
                  <img src={subject.img} className="subject-image" alt="subject-jpeg"/>
                </div>
                <div className="subject-text-container">
                  <header className="subject-header">{subject.title}</header>
                  <p className="subject-description">{subject.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumPageComponent;
