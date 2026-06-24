import React from 'react';
import AboutBannerImage from '../assets/sportsday-house-banner.jpg';
import MemberImage from '../assets/image (3).png';
import MemberImage2 from '../assets/image (4).png';
import studentImage from '../assets/sportsday-trophy-winners.jpg';
import '../css/AboutPageComponent.scss';
import SchoolMission from './SchooolMission';

const AboutPageComponent = () => {
  return (
    <div >
      <section className='about-us-section '>
      <div className="slider-page-width">
      <div className="banner-container">
          <img src={AboutBannerImage} className='banner-image' alt='about-banner' />
          <div className="banner-container-overlay">About Us</div>
        </div>

      </div>
        <div className="about-us-description">
          <div className="page-width">
          <header className='about-header'>Who We Are</header>
          <p className='about-us'>
          <span className='drop-cap'>H</span>oney Rock School, founded in 2013, is a nurturing educational institution dedicated to providing exceptional international education to young learners in Lagos, Nigeria. Our esteemed school has obtained official recognition and operating approval from both the Federal Ministry of Education and the Lagos State Ministry of Education. Additionally, we proudly hold accreditations from esteemed bodies like the Association of Private Educators in Nigeria and the Association of International School Educators of Nigeria. We take great pride in offering our students an outstanding foundation for lifelong success.
         </p>

         <p>
          Our holistic approach empowers them to emerge as well-rounded individuals, equipped with the confidence, determination, and commitment to excel in an ever-changing global landscape. At Honey Rock School, we seamlessly blend the British and Nigerian curricula, employing engaging and empowering teaching methods. This prepares our pupils for a future of accomplishment and significance on a global scale. Every student's educational journey at Honey Rock is marked by excellence, character development, and the highest academic standards. We are dedicated to crafting a rich educational experience that fosters personal growth and prepares pupils for the challenges of tomorrow.
        </p>

        <p>
          Our state-of-the-art facilitie is meticulously designed to prioritize safety and create an optimal learning environment. Our classrooms feature cutting-edge digital resources such as interactive whiteboards, while our dedicated ICT suite promotes digital literacy through computer-based learning. The Honey Rock team comprises seasoned professionals who undergo continuous local and international training, ensuring that they remain at the forefront of modern educational demands. This commitment allows us to provide unparalleled guidance and support to our pupils, fostering their intellectual and personal growth.
        </p>
          </div>
        </div>
      </section>

      <SchoolMission/>

      <div className="members-section">
        <div className="page-width">
          <header>Meet the Team</header>
          <div className="members-container">
            <div className="member-detail">
              <img src={MemberImage} alt='member' className='member-image  x'  />
              <p className="member-name">Ngozi Nwosu</p>
              <p className="member-position">Executive Director/Principal</p>
            </div>

            <div className="member-detail">
              <img src={MemberImage2} alt='member' className='member-image y'  />
              <p className="member-name">Benjamin Ekubor</p>
              <p className="member-position">Head of School</p>
            </div>

            <div className="member-detail">
              <img src={MemberImage} alt='member' className='member-image z'  />
              <p className="member-name">Ngozi Nwosu</p>
              <p className="member-position">Executive Director/Principal</p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-width">
        <div className="about-student">
          <div className="student-image-container">
            <img src={studentImage} alt='student' className='student-image' />
          </div>

          <div className="student-text-container">
            <header>Our Students Are</header>
            <p>
              Confident, curious, and proud of who they are. Whether they're competing on Sports Day,
              celebrating their achievements at graduation, or learning hands-on outside the classroom,
              our students bring energy and enthusiasm to everything they do.
            </p>

            <p>
              We nurture each child to discover their own strengths, work well with others, and carry
              themselves with the kind of confidence that lasts well beyond their time at HoneyRock.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageComponent;
