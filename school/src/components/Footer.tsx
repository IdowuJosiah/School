import React from 'react'
import '../css/Footer.scss'
import logoImage from "../assets/School logo-Photoroom.png"; // Import the logo
// import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
      <footer className='footer-section'>
        <div className="page-width">
            <div className="footer-container">
            <div className="footer-item">
              <img src={logoImage} alt='logo' className='footer-logo' />
              <p>The Honey Rock School</p>
              <ul className="location">
                  <li>37B Aladelola Street Ikosi Ketu,</li>
                  <li>Off Ikosi Road, Ketu, Lagos.</li>
                  <li>+234 802 304 1259</li>
                  <li>+234 904 995 2952</li>
              </ul>
          </div>

          <div className="footer-item links">
              <header className="footer-item-header">Quick Links</header>
              <a className='link' href='/about'>About Us</a>
              <a className='link' href='/admission'>Admissions</a>
              <a className='link' href='/curriculum'>Curriculum</a>
              <a className='link' href='/'>Programmes</a>
              <a className='link' href='/nursery-and-primary'>Gallery</a>
              <a className='link' href='/admission'>Register</a>
          </div>

          <div className="footer-item">
            <header className="footer-item-header">Follow Us</header>
            <div className="social-media">
            <a href="https://www.instagram.com/the_honeyrockschool/" target="_blank" rel="noreferrer"><FaInstagram/></a>
            <FaFacebook/>
            <FaSquareXTwitter/>
            </div>
          </div>
            </div>

        </div>
      </footer>
    );
  };
  
  export default Footer;
