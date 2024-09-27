import React, { useState, ChangeEvent, FormEvent } from "react";
import "../css/Contact.scss"
import contactBanner from '../assets/top-view-chat-bubbles-with-telephone-receiver.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
interface FormData {
    name: string;
    email: string;
    telephone: string;
    message: string;
}

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        telephone: "",
        message: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here, e.g., send the data to an API
        console.log(formData);
    };

    return (
        <div>
            <div className="contact-us-banner">
                <img src={contactBanner} alt="#"/>
                <div className="contact-us-container">
                <div className="contact-details">
                    <div className="contact-details-header">
                        <h2>Contact Details</h2>
                        <h3>General Enquiries</h3>
                    </div>

                    <div className="contact-details-part-one">
                        <div>
                            <span>email:</span> <span>info@kidscourtschool.com</span>
                        </div>
                        <div>
                            <span>tel:</span> <span>+234 818 200 5331 - Nursery School</span>
                        </div>
                        <div>
                            <span>tel:</span> <span>+234 818 200 5333 - Primary School</span>
                        </div>
                    </div>
                    <div>
                        <p >
                            <strong>Nursery:</strong><br />
                            56/58, Modupe Johnson Crescent,<br />
                            Off Adeniran Ogunsanya Street,<br />
                            Surulere, Lagos.
                        </p>
                        <p className="br">
                            <strong>Primary:</strong><br />
                            68, Femi Ayantuga Crescent,<br />
                            Off Adelabu Street,<br />
                            Surulere, Lagos.
                        </p>
                    </div>

                    <div className="social-icons">
                        <a href="/"><FaFacebook/></a>
                        <a href="/"><FaInstagram/></a>
                        <a href="/"><FaTwitter/></a>
                        <a href="/"><FaLinkedin/></a>
                    </div>
                </div>

                <div className="get-in-touch">
                    <h2>Get in Touch</h2>
                    <form className="contact-us-form" onSubmit={handleSubmit}>
                        <div className="cuf">
                            <label htmlFor="name">Name </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="cuf">
                            <label htmlFor="email">Email </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="cuf">
                            <label htmlFor="telephone">Telephone</label>
                            <input
                                type="tel"
                                name="telephone"
                                value={formData.telephone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="cuf">
                            <label htmlFor="message">Message </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            </div>
   
        </div>

    );
};

export default ContactUs;
