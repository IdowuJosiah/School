import { navigation } from '../interfaces/interface';
import '../css/NavBar.scss';
import { useState, useEffect } from 'react';
import { cloneDeep } from 'lodash';
import { Link } from 'react-router-dom';
// import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import logoImage from "../assets/School logo-Photoroom.png"; 

const NavBar = () => {
  const navigationItems: navigation[] = [
    {
      title: 'About Us',
      path: '/about',
      isVisible: false,
      children: [
        { title: 'About Us', path: '/about' },
        { title: 'Directors Message', path: '/directors-message' },
      ],
    },
    {
      title: 'School',
      path: '/nursery-primary',
      isVisible: false,
      children: [{ title: 'Nursery - Primary', path: '/nursery-primary' }],
    },
    {
      title: 'Curriculum',
      path: '/curriculum',
      isVisible: false,
      children: [{ title: 'Curriculum', path: '/curriculum' }],
    },
    {
      title: 'Admissions',
      path: '/admission',
      isVisible: false,
      children: [
        { title: 'Admission', path: '/admission' },
        { title: 'Apply For Admission', path: '/apply-for-admission' },
      ],
    },
    {
      title: 'Gallery',
      path: '/gallery',
      isVisible: false,
      children: [{ title: 'Honey Rock Gallery', path: '/gallery' }],
    },
    {
      title: 'Contact',
      path: '/contact-us',
      isVisible: false,
      children: [
        { title: 'Contact Us', path: '/contact-us' },
        // { title: 'Parents Feedback', path: '/parent-feedback' },
      ],
    },
  ];

  const [navItems, setNavItems] = useState<navigation[]>(navigationItems);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false); 
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    function updateView(){
      // Set isMobileView to true if screen width is <= 720px
      setIsMobileView(window.innerWidth <= 720);
    };

    // Set the initial view
    updateView();

    // Listen to window resize event
    window.addEventListener('resize', updateView);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('resize', updateView);
  }, []);

  const handleToggle = (index: number): void => {
    let clonedArray = cloneDeep(navItems);
    clonedArray = clonedArray.map((item, itemIndex) => {
      if (itemIndex === index) {
        item.isVisible = !item.isVisible;
      } else {
        item.isVisible = false;
      }
      return item;
    });

    setNavItems(clonedArray);
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <nav className="navigation-bar">
      <button
        type="button"
        className="accordion-toggle"
        onClick={toggleAccordion}
      >
        <GiHamburgerMenu />
      </button>

      <Link to="/"><img alt="logo" src={logoImage} /></Link>

      <div className="page-width">
        <div className="navigation-content">
          <ul className={`navigation-list ${isAccordionOpen ? 'active' : 'inactive'}`}>
            {navItems.map((item, index) => (
              <li key={index} className="main-list-items">
                {isMobileView ? (
                  // Render Link for mobile view
                  <Link to={item.path} className="nav-button">
                    {item.title}
                  </Link>
                ) : (
                  // Render div with dropdown for larger screens
                  <div
                    onClick={() => handleToggle(index)}
                    className="nav-button"
                  >
                    {item.title}
                  </div>
                )}

                {/* Dropdown */}
                {!isMobileView && (
                  <ul className={`dropdown-items ${item.isVisible ? 'active' : ''}`}>
                    {item.children?.map((child, childIndex) => (
                      <li key={childIndex}>
                        <Link to={child.path}>{child.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
