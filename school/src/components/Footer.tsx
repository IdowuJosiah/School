import React from "react";
import "../css/Footer.css";
import {footer} from "../interfaces/interface";
import {AiFillFacebook} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiOutlineCopyrightCircle} from "react-icons/ai"

const Footer = () => {

        const footerNav : footer[] =[
            {
                title: "Home",
                path: "./"
            },
            {
                title: "Calendars",
                path: "./"
            },
            {
                title: "Admissions",
                path: "./"
            },
            {
                title: "Nursery",
                path: "./"
            },
            {
                title: "Primary",
                path: "./"
            },
            {
                title: "About Honey Rock Schhols",
                path: "./"
            },
            {
                title: "Order Uniforms",
                path: "./"
            },
            {
                title: "Parent's Feedback",
                path: "./"
            },
            {
                title: "Careers",
                path: "./"
            },
            {
                title: "Take a Virtual Tour",
                path: "./"
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
                                        <li>
                                            {item.title}
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
                     <span><AiOutlineCopyrightCircle/></span> 2023. HONEY ROCK SCHOOLS. ALL RIGHT RESERVED. <span>PRIVACY POLICY</span>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Footer