import React from 'react';
import AboutBannerImage from '../assets/image (2).png';
import MemberImage from '../assets/image (3).png';
import MemberImage2 from '../assets/image (4).png';
import studentImage from '../assets/image (5).png';
import '../css/AboutPageComponent.scss';

const AboutPageComponent = () => {
  return (
    <div>
      <section className='about-us-section '>
      <div className="banner-container">
          <img src={AboutBannerImage} className='banner-image' alt='about-banner' />
          <div className="banner-container-overlay">About Us</div>
        </div>

        <div className="about-us-description page-width">
          <header className='about-header'>Who We Are</header>
          <p className='about-us'>
          <span className='drop-cap'>H</span>oney Rock School, founded in 2013, is a nurturing educational institution dedicated to providing exceptional international education to young learners in Lagos, Nigeria.
          
          Our esteemed school has obtained official recognition and operating approval from both the Federal Ministry of Education and the Lagos State Ministry of Education. Additionally, we proudly hold accreditations from esteemed bodies like the Association of Private Educators in Nigeria and the Association of International School Educators of Nigeria.

          We take great pride in offering our students an outstanding foundation for lifelong success. Our holistic approach empowers them to emerge as well-rounded individuals, equipped with the confidence, determination, and commitment to excel in an ever-changing global landscape.
          
          At Honey Rock School, we seamlessly blend the Montessori, British, and Nigerian curricula, employing engaging and empowering teaching methods. This prepares our students for a future of accomplishment and significance on a global scale.

          Every student's educational journey at Honey Rock is marked by excellence, character development, and the highest academic standards. We are dedicated to crafting a rich educational experience that fosters personal growth and prepares students for the challenges of tomorrow.

          Our state-of-the-art facilities include two purpose-built campuses, meticulously designed to prioritize safety and create an optimal learning environment. Our classrooms feature cutting-edge digital resources such as interactive whiteboards, while our dedicated ICT suite promotes digital literacy through computer-based learning.

          The Honey Rock team comprises seasoned professionals who undergo continuous local and international training, ensuring that they remain at the forefront of modern educational demands. This commitment allows us to provide unparalleled guidance and support to our students, fostering their intellectual and personal growth.
        </p>

        </div>
      </section>

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
              Lorem ipsum dolor sit amet consectetur. Et rutrum a at ipsum nulla diam arcu egestas.
              Sed nunc integer venenatis lacus sed consequat. Quisque tristique purus sit arcu purus neque diam.
              Donec tellus diam donec penatibus ornare consequat. Ullamcorper varius vitae a ipsum integer lobortis vitae.
              Magna scelerisque turpis euismod volutpat et sit purus euismod. Proin non mi diam hac eget posuere quam.
              Laoreet venenatis eget in enim risus integer quis adipiscing. Ultricies auctor neque rhoncus turpis non consequat scelerisque gravida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageComponent;
