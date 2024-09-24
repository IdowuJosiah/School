import { navigation } from '../interfaces/interface';
import '../css/NavBar.scss';
import { useState } from 'react';
import { cloneDeep } from 'lodash';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for conditional rendering
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import logoImage from "../assets/School logo-Photoroom.png"; // Import the logo

const NavBar = () => {
  const location = useLocation(); // Get the current route

  // navigation items
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
      path: '/school',
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
      path: '/contact',
      isVisible: false,
      children: [
        { title: 'Contact Us', path: '/contact-us' },
        { title: 'Parents Feedback', path: '/parent-feedback' },
      ],
    },
  ];

  const [navItems, setNavItems] = useState<navigation[]>(navigationItems);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false); // Accordion state

  // dropdown visibility
  const handleToggle = (index: number): void => {
    let clonedArray = cloneDeep(navItems);
    clonedArray = clonedArray.map((item, itemIndex) => {
      if (itemIndex === index) {
        item.isVisible = !item.isVisible;
      } else {
        item.isVisible = false; // Close other dropdowns
      }
      return item;
    });

    setNavItems(clonedArray);
  };

  // Toggle accordion visibility for small screens
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

      {location.pathname !== '/' && (
        <Link to="/"><img alt="logo" src={logoImage} /></Link>
      )}

      <div className="page-width">
        <div className="navigation-content">
          <ul className={`navigation-list ${isAccordionOpen ? 'active' : 'inactive'}`}>
            {navItems.map((item, index) => (
              <li key={index} className="main-list-items">
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={item.isVisible}
                  className="nav-button"
                >
                  {item.title}
                </button>

                {/* Dropdown */}
                <ul className={`dropdown-items ${item.isVisible ? 'active' : ''}`}>
                  {item.children?.map((child, childIndex) => (
                    <li key={childIndex}>
                      <Link to={child.path}>{child.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
