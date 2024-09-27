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
              <ul className="location nursery">
                  <li>Nursery Address:</li>
                  <li>18A Jimoh Balogun Street, Off Cmd Road, Off Aladelola Street, Ikosi-Ketu, Lagos-Nigeria</li>
                  <li>+2348081274082</li>
                  <li>+2348081274082</li>
              </ul>
              <ul className="location">
                  <li>Primary Address:</li>
                  <li>No 37b Aladelola street, Off Ikosi Road, Ikosi-Ketu Lagos-Nigeria</li>
                  <li>+2348081274082</li>
                  <li>+2348081274082</li>
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
            <FaInstagram/>
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
