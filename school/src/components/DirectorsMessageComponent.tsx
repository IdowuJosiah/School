import React from "react";
import "../css/DirectorsMessageComponent.scss";
import BannerComponent from "./BannerComponent";
import GalleryBannerImage from '../assets/WhatsApp Image 2024-09-23 at 4.44.24 PM 1.png';
import DirectorsImage from '../assets/director-portrait.jpg';

const DirectorsMessageComponent = () => {
    return (
        <div className="director-container">
            <BannerComponent
                title="Director's Message"
                image={GalleryBannerImage}
                description="A word from the heart of our school"
                buttonInformation={<></>}
            />

            <div className="director-message-section">
                <div className="page-width">
                    <header className="director-header">A Message from Our Director</header>

                    <p>
                        <span className="drop-cap">I</span>t gives me great joy to welcome you to the official website of The HoneyRock Nursery & Primary School – the best place for your child! Over the years, we have prided ourselves in providing the very best international education to nursery and primary school children in the Lagos metropolis, and we are indeed glad that our children continue to surpass expectations.
                    </p>

                    <p>
                        Our community is made up of vibrant, dedicated teachers and engaged parents who are true partners, committed to walking together on the journey of excellent education. Every child who walks through our doors is nurtured not only academically, but in character and confidence as well.
                    </p>

                    <p>
                        I invite you to explore all aspects of this website and reach out to us should you have any enquiries. We look forward to welcoming your family into ours.
                    </p>

                    <div className="director-closing">
                        <img className="director-image" alt="Director" src={DirectorsImage} />
                        <ul className="director-info">
                            <li>Best Regards,</li>
                            <li className="bold">Ps. Aduke Obey</li>
                            <li className="bold">Director, The HoneyRock Nursery & Primary School</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DirectorsMessageComponent;
