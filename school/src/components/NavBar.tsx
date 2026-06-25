import { navigation } from '../interfaces/interface';
import '../css/NavBar.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import logoImage from '../assets/School logo-Photoroom.png';

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
    children: [{ title: 'Contact Us', path: '/contact-us' }],
  },
];

const NavBar = () => {
  const [navItems, setNavItems] = useState<navigation[]>(navigationItems);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const updateView = () => setIsMobileView(window.innerWidth <= 820);

    updateView();
    window.addEventListener('resize', updateView);

    return () => window.removeEventListener('resize', updateView);
  }, []);

  const handleToggle = (index: number): void => {
    const clonedArray = navItems.map((item, itemIndex) => ({
      ...item,
      isVisible: itemIndex === index ? !item.isVisible : false,
    }));

    setNavItems(clonedArray);
  };

  const toggleAccordion = () => {
    setIsAccordionOpen((isOpen) => !isOpen);
  };

  return (
    <nav className="navigation-bar">
      <Link to="/" aria-label="Honey Rock School home">
        <img alt="Honey Rock School logo" src={logoImage} />
      </Link>

      <button
        type="button"
        className="accordion-toggle"
        onClick={toggleAccordion}
        aria-label="Toggle navigation menu"
        aria-expanded={isAccordionOpen}
      >
        <GiHamburgerMenu />
      </button>

      <div className={`navigation-content${isAccordionOpen ? ' menu-open' : ''}`}>
          <ul className="navigation-list">
            {navItems.map((item, index) => (
              <li key={item.title} className="main-list-items">
                {isMobileView ? (
                  <Link to={item.path} className="nav-button" onClick={() => setIsAccordionOpen(false)}>
                    {item.title}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    className="nav-button"
                  >
                    {item.title}
                  </button>
                )}

                {!isMobileView && (
                  <ul className={`dropdown-items ${item.isVisible ? 'active' : ''}`}>
                    {item.children?.map((child) => (
                      <li key={child.title}>
                        <Link to={child.path}>{child.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
      </div>
    </nav>
  );
};

export default NavBar;
