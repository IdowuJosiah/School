import "../css/GalleryPageComponent.scss";
import BannerComponent from "./BannerComponent";
import GalleryBannerImage from '../assets/WhatsApp Image 2024-09-23 at 4.44.24 PM 1.png';
import React, { useState, useEffect, useCallback } from 'react';
import { IoClose } from 'react-icons/io5';
import OddSocksDay from '../assets/odd-socks-day.jpg';
import ClassroomCraftActivity from '../assets/classroom-craft-activity.jpg';
import ClassroomLearningCorner from '../assets/classroom-learning-corner.jpg';
import ClassroomWhiteboardLesson from '../assets/classroom-whiteboard-lesson.jpg';
import SportsdayHouseBanner from '../assets/sportsday-house-banner.jpg';
import SportsdayTugOfWar from '../assets/sportsday-tug-of-war.jpg';
import SportsdayTrophyWinners from '../assets/sportsday-trophy-winners.jpg';
import LawizaShopTour from '../assets/lawiza-shop-tour.jpg';
import LawizaGarmentShowcase from '../assets/lawiza-garment-showcase.jpg';
import LawizaDesignerExplains from '../assets/lawiza-designer-explains.jpg';
import LawizaMannequinDemo from '../assets/lawiza-mannequin-demo.jpg';
import FacilityPlayground1 from '../assets/facility-playground-1.jpg';
import FacilityPlayground2 from '../assets/facility-playground-2.jpg';
import FacilityPlayground3 from '../assets/facility-playground-3.jpg';
import SportsdayBallRelay from '../assets/sportsday-ball-relay.jpg';
import GraduationMcTrio from '../assets/graduation-mc-trio.jpg';
import GraduationGroup from '../assets/graduation-group.jpg';
import GraduationSashes from '../assets/graduation-sashes.jpg';
import GraduationDirectorCake from '../assets/graduation-director-cake.jpg';

interface ModalImage { src: string; alt: string; }

const GalleryPageComponent = () => {
  const [modal, setModal] = useState<ModalImage | null>(null);

  const openModal = useCallback((src: string, alt: string) => {
    setModal({ src, alt });
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setModal(null);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [closeModal]);

  const Img = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
    <img
      className={`gallery-photo${className ? ` ${className}` : ''}`}
      src={src}
      alt={alt}
      onClick={() => openModal(src, alt)}
    />
  );

  return (
    <div>
      <BannerComponent
        title='A glimpse into our school life'
        image={GalleryBannerImage}
        description="Explore the vibrant atmosphere, special moments, and everyday experiences that make our school unique."
        buttonInformation={<></>}
      />

      <div className="page-width">
        <div className="gallery-section">

          {/* Extra Curricular Activities */}
          <div className="gallery-container">
            <div className="gallery initial">
              <div className="gallery-item-header">
                <header>Extra Curricular Activities</header>
                <p>Explore the wide range of activities that help our students develop skills beyond the classroom.</p>
              </div>
              <div className="gallery-content">
                <Img src={OddSocksDay} alt="Students celebrating Odd Socks Day" />
              </div>
            </div>
            <div className="gallery central">
              <Img src={SportsdayTugOfWar} alt="Staff and parents in a tug of war on Sports Day" />
            </div>
            <div className="gallery final">
              <div className="gallery-item-header">
                <Img src={SportsdayHouseBanner} alt="Students holding the Sports Day house banner" />
              </div>
              <div className="gallery-content">
                <Img src={SportsdayTrophyWinners} alt="Students celebrating with their Sports Day trophies" />
              </div>
            </div>
          </div>

          {/* Classroom Photos */}
          <div className="gallery-container">
            <div className="gallery initial">
              <div className="gallery-item-header">
                <header>Classroom Photos</header>
                <p>Experience our dynamic and engaging classrooms where students actively participate and thrive.</p>
              </div>
              <div className="gallery-content">
                <Img src={ClassroomLearningCorner} alt="Nursery students learning in a colourful classroom corner" />
              </div>
            </div>
            <div className="gallery central">
              <Img src={ClassroomWhiteboardLesson} alt="Primary students seated at their desk during a lesson" />
            </div>
            <div className="gallery final solo">
              <Img src={ClassroomCraftActivity} alt="Students collaborating on a craft activity in class" />
            </div>
          </div>

          {/* School Trips */}
          <div className="gallery-container">
            <div className="gallery initial">
              <div className="gallery-item-header">
                <header>School Trips & Excursions</header>
                <p>Exciting educational trips that broaden our students' horizons and real-world experiences.</p>
              </div>
              <div className="gallery-content">
                <Img src={LawizaShopTour} alt="Students on an excursion to the Lawiza fashion studio" />
              </div>
            </div>
            <div className="gallery central">
              <Img src={LawizaMannequinDemo} alt="A designer demonstrating garment-making to students at Lawiza" />
            </div>
            <div className="gallery final">
              <div className="gallery-item-header">
                <Img src={LawizaDesignerExplains} alt="A designer at Lawiza showing students a handmade garment" />
              </div>
              <div className="gallery-content">
                <Img src={LawizaGarmentShowcase} alt="A student examining a designer garment at Lawiza" />
              </div>
            </div>
          </div>

          {/* Facilities */}
          <div className="gallery-container">
            <div className="gallery initial">
              <div className="gallery-item-header">
                <header>Facilities Tour</header>
                <p>A glimpse of our state-of-the-art facilities designed for the best learning environment.</p>
              </div>
              <div className="gallery-content">
                <Img src={FacilityPlayground1} alt="Outdoor playground equipment at our school" />
              </div>
            </div>
            <div className="gallery central">
              <Img src={SportsdayBallRelay} alt="Our astro-turf sports field" />
            </div>
            <div className="gallery final">
              <div className="gallery-item-header">
                <Img src={FacilityPlayground2} alt="Play equipment in our outdoor playground" />
              </div>
              <div className="gallery-content">
                <Img src={FacilityPlayground3} alt="A corner of our outdoor play area" />
              </div>
            </div>
          </div>

          {/* Graduation */}
          <div className="gallery-container">
            <div className="gallery initial">
              <div className="gallery-item-header">
                <header>Graduation & Special Events</header>
                <p>Celebrating the milestones and proud moments that mark our students' journeys with us.</p>
              </div>
              <div className="gallery-content">
                <Img src={GraduationMcTrio} alt="Graduating students on stage at the Blazing Stars graduation ceremony" />
              </div>
            </div>
            <div className="gallery central">
              <Img src={GraduationSashes} alt="Graduands wearing their Honey Rock Graduand sashes" />
            </div>
            <div className="gallery final">
              <div className="gallery-item-header">
                <Img src={GraduationGroup} alt="Students celebrating at the graduation ceremony" />
              </div>
              <div className="gallery-content">
                <Img src={GraduationDirectorCake} alt="The Director celebrating with graduands and their cakes" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="gallery-modal" onClick={closeModal} role="dialog" aria-modal="true">
          <button className="modal-close" onClick={closeModal} aria-label="Close image">
            <IoClose />
          </button>
          <img
            src={modal.src}
            alt={modal.alt}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPageComponent;
