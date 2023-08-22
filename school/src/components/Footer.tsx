import React from "react";
import "../css/Footer.css";
import {footer} from "../interfaces/interface";
import {AiFillFacebook} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiOutlineCopyrightCircle} from "react-icons/ai"
import { Link } from "react-router-dom"


const Footer = () => {

        const footerNav : footer[] =[
            {
                title: "Home",
                path: "/"
            },
          //  {
         //       title: "Calendars",
       //         path: "./"
      //      },
            {
                title: "Admissions",
                path: "/admissions"
            },
            {
                title: "Nursery",
                path: "/nursery"
            },
            {
                title: "Primary",
                path: "/primary"
            },
            {
                title: "About Honey Rock Schhols",
                path: "/about"
            },
       //     {
      //          title: "Order Uniforms",
     //           path: "/order"
      //      },
            {
                title: "Parent's Feedback",
                path: "/feedback"
            },
        //    {
      //          title: "Careers",
      //          path: "./"
      //      },
            {
                title: "Take a Virtual Tour",
                path: "/tour"
            },
        ]

    return(
        <section className="footer">
            <div className="footer-container">
                <div className="footer-details">
                    <div className="footer-nav">
                        {footerNav.map((item, index) =>{
                            return(
                                <div className="footer-nav-list">
                                    <ul>
                                        <li key={index}>

                                       <Link to={item.path}>{item.title}</Link>
                                        </li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                    <div className="footer-contact-details">
                        <p className="footer-contact-header">CONTACT US</p>
                        <div className="footer-contact-nursery">
                            <h2>NURSERY</h2>
                            <p className="address">18A Jimoh Balogun Street,
                                Off Cmd Road, Off Aladelola Street,
                                Ikosi-Ketu Lagos-Nigeria
                            </p>
                            <p className="telephone">
                                <p>+2348081274082</p>
                                <p>+2348081274082</p>
                            </p>
                        </div>
                        <div className="footer-contact-nursery">
                            <h2>PRIMARY</h2>
                            <p className="address">No 37b Aladelola street,
                                Off Ikosi Road,
                                Ikosi-Ketu Lagos-Nigeria
                            </p>
                            <p className="telephone">
                                <p>+2348081274082</p>
                                <p>+2348081274082</p>
                            </p>
                        </div>
                        <div className="footer-contact-social">
                            <ul>
                                <li>
                                    <AiFillFacebook/>
                                </li>
                                <li>
                                    <AiOutlineInstagram/>
                                </li>
                                <li>
                                    <AiOutlineTwitter/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-school-logo">
                        <span><img alt="logo"
                            src="./School logo.JPG"/></span>
                    </div>
                </div>
                <div className="copyright">
                   <div>
                   2023 HONEY ROCK SCHOOLS. ALL RIGHT RESERVED. 
                   </div>
                   <AiOutlineCopyrightCircle/>
                    
                </div>
            </div>

        </section>
    )
}
export default Footer