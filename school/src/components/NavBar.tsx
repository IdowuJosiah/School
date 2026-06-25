import { navigation } from '../interfaces/interface';
import '../css/NavBar.scss';
import { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (index: number): void => {
    setNavItems(navItems.map((item, i) => ({
      ...item,
      isVisible: i === index ? !item.isVisible : false,
    })));
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="navigation-bar">
        <Link to="/" aria-label="Honey Rock School home" onClick={closeMenu}>
          <img alt="Honey Rock School logo" src={logoImage} />
        </Link>

        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li key={item.title} className="nav-item">
              <button type="button" onClick={() => handleToggle(index)} className="nav-button">
                {item.title}
              </button>
              <ul className={`dropdown ${item.isVisible ? 'open' : ''}`}>
                {item.children?.map((child) => (
                  <li key={child.title}>
                    <Link to={child.path}>{child.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="hamburger"
          onClick={() => setIsOpen(o => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <GiHamburgerMenu />
        </button>
      </nav>

      <div className={`mobile-menu${isOpen ? ' open' : ''}`}>
        <ul>
          {navigationItems.map((item) => (
            <li key={item.title}>
              <Link to={item.path} onClick={closeMenu}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
