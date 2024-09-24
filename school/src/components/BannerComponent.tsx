import React from 'react';
import '../css/NurseryPrimaryComponent.scss';

interface BannerSectionProps {
  title: string;
  description: string;
  image: string;
  buttonInformation: React.ReactNode;
}

const BannerComponent: React.FC<BannerSectionProps> = ({ title, description, image, buttonInformation }) => {
  return (
    <div className="school-banner-container">
      <img src={image} className="banner-image" alt="about-banner" />
      <div className="school-container-overlay">
        <header>{title}</header>
        <p>{description}</p>
        <button> {buttonInformation}</button>
      </div>
    </div>
  );
};

export default BannerComponent;
