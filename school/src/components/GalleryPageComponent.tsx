import "../css/GalleryPageComponent.scss";
import BannerComponent from "./BannerComponent";
import GalleryBannerImage from '../assets/WhatsApp Image 2024-09-23 at 4.44.24 PM 1.png';
import React from 'react';

const GalleryPageComponent = () => {
  return (
    <div>
      {/* Banner Section */}
      <BannerComponent
        title='A glimpse into our school life'
        image={GalleryBannerImage}
        description="Explore the vibrant atmosphere, special moments, and everyday experiences that make our school unique. See what it's like to be part of our community"
        buttonInformation={<>View Gallery</>}
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

                    <div className="gallery-content"></div>
                   
             </div>
             <div className="gallery central"></div>
             <div className="gallery final">
                <div className="gallery-item-header">

                </div>

                <div className="gallery-content">

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

                    <div className="gallery-content"></div>
                   
             </div>
             <div className="gallery central"></div>
             <div className="gallery final">
                <div className="gallery-item-header">

                </div>

                <div className="gallery-content">
                    
                </div>
            </div>    
          </div>

          {/* Third Gallery Container */}
          <div className="gallery-container">
                <div className="gallery initial">
                    <div className="gallery-item-header">
                        <header>School Trips and Excursions</header>
                        <p>Join us on exciting educational trips and excursions that broaden our students' horizons and experiences.</p>
                    </div>

                    <div className="gallery-content"></div>
                   
                </div>
                <div className="gallery central"></div>
                <div className="gallery final">
                    <div className="gallery-item-header">

                    </div>

                <div className="gallery-content">
                    
                </div>
            </div>   
            
             
          </div>
          <div className="gallery-container">
                <div className="gallery initial">
                    <div className="gallery-item-header">
                        <header>Facilities Tour</header>
                        <p>Get a glimpse of our state-of-the-art facilities designed to provide the best learning environment for our students.</p>
                    </div>

                    <div className="gallery-content"></div>
                   
             </div>
             <div className="gallery central"></div>
             <div className="gallery final">
                <div className="gallery-item-header">

                </div>

                <div className="gallery-content">
                    
                </div>
            </div>    
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPageComponent;
