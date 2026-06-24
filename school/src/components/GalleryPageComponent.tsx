import "../css/GalleryPageComponent.scss";
import BannerComponent from "./BannerComponent";
import GalleryBannerImage from '../assets/WhatsApp Image 2024-09-23 at 4.44.24 PM 1.png';
import React from 'react';
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

const GalleryPageComponent = () => {
  return (
    <div>
      {/* Banner Section */}
      <BannerComponent
        title='A glimpse into our school life'
        image={GalleryBannerImage}
        description="Explore the vibrant atmosphere, special moments, and everyday experiences that make our school unique. See what it's like to be part of our community"
        buttonInformation={
        <>
          {/* <a href="/admission">View Gallery</a> */}
        </>}
      />

      {/* Main Content */}
      <div className="page-width">
        <div className="gallery-section">
          
          {/* First Gallery Container */}
          <div className="gallery-container">
                <div className="gallery initial">
                    <div className="gallery-item-header">
                        <header>Extra Curricular Activities</header>
                        <p>Explore the wide range of activities that help our students develop skills beyond the classroom.</p>
                    </div>

                    <div className="gallery-content">
                        <img className="gallery-photo" src={OddSocksDay} alt="Students celebrating Odd Socks Day" />
                    </div>

             </div>
             <div className="gallery central">
                <img className="gallery-photo" src={SportsdayTugOfWar} alt="Staff and parents in a tug of war on Sports Day" />
             </div>
             <div className="gallery final">
                <div className="gallery-item-header">
                    <img className="gallery-photo" src={SportsdayHouseBanner} alt="Students holding the Sports Day house banner" />
                </div>

                <div className="gallery-content">
                    <img className="gallery-photo" src={SportsdayTrophyWinners} alt="Students celebrating with their Sports Day trophies" />
                </div>
            </div>
          </div>

          {/* Second Gallery Container */}
     <div className="gallery-container">
                <div className="gallery initial">
                    <div className="gallery-item-header">
                        <header>Classroom Photos</header>
                        <p> Experience our dynamic and engaging classrooms where students actively participate and thrive in their learning.</p>
                    </div>

                    <div className="gallery-content">
                        <img className="gallery-photo" src={ClassroomLearningCorner} alt="Nursery students learning in a colourful classroom corner" />
                    </div>

             </div>
             <div className="gallery central">
                <img className="gallery-photo" src={ClassroomWhiteboardLesson} alt="Primary students seated at their desk during a lesson" />
             </div>
             <div className="gallery final solo">
                <img className="gallery-photo" src={ClassroomCraftActivity} alt="Students collaborating on a craft activity in class" />
            </div>
          </div>

          {/* Third Gallery Container */}
          <div className="gallery-container">
                <div className="gallery initial">
                    <div className="gallery-item-header">
                        <header>School Trips and Excursions</header>
                        <p>Join us on exciting educational trips and excursions that broaden our students' horizons and experiences.</p>
                    </div>

                    <div className="gallery-content">
                        <img className="gallery-photo" src={LawizaShopTour} alt="Students on an excursion to the Lawiza fashion studio" />
                    </div>

                </div>
                <div className="gallery central">
                    <img className="gallery-photo" src={LawizaMannequinDemo} alt="A designer demonstrating garment-making to students at Lawiza" />
                </div>
                <div className="gallery final">
                    <div className="gallery-item-header">
                        <img className="gallery-photo" src={LawizaDesignerExplains} alt="A designer at Lawiza showing students a handmade garment" />
                    </div>

                <div className="gallery-content">
                    <img className="gallery-photo" src={LawizaGarmentShowcase} alt="A student examining a designer garment at Lawiza" />
                </div>
            </div>


          </div>
          <div className="gallery-container">
                <div className="gallery initial">
                    <div className="gallery-item-header">
                        <header>Facilities Tour</header>
                        <p>Get a glimpse of our state-of-the-art facilities designed to provide the best learning environment for our students.</p>
                    </div>

                    <div className="gallery-content">
                        <img className="gallery-photo" src={FacilityPlayground1} alt="Outdoor playground equipment at our school" />
                    </div>

             </div>
             <div className="gallery central">
                <img className="gallery-photo" src={SportsdayBallRelay} alt="Our astro-turf sports field" />
             </div>
             <div className="gallery final">
                <div className="gallery-item-header">
                    <img className="gallery-photo" src={FacilityPlayground2} alt="Play equipment in our outdoor playground" />
                </div>

                <div className="gallery-content">
                    <img className="gallery-photo" src={FacilityPlayground3} alt="A corner of our outdoor play area" />
                </div>
            </div>
          </div>

          {/* Fifth Gallery Container */}
          <div className="gallery-container">
                <div className="gallery initial">
                    <div className="gallery-item-header">
                        <header>Graduation & Special Events</header>
                        <p>Celebrate the milestones, ceremonies, and proud moments that mark our students' journeys with us.</p>
                    </div>

                    <div className="gallery-content">
                        <img className="gallery-photo" src={GraduationMcTrio} alt="Graduating students on stage at the Blazing Stars graduation ceremony" />
                    </div>

             </div>
             <div className="gallery central">
                <img className="gallery-photo" src={GraduationSashes} alt="Graduands wearing their Honey Rock Graduand sashes" />
             </div>
             <div className="gallery final">
                <div className="gallery-item-header">
                    <img className="gallery-photo" src={GraduationGroup} alt="Students celebrating at the graduation ceremony" />
                </div>

                <div className="gallery-content">
                    <img className="gallery-photo" src={GraduationDirectorCake} alt="The Director celebrating with graduands and their cakes" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPageComponent;
