import React from "react";
import "../css/DirectorsMessageComponent.scss";
// import { FaQuoteLeft } from "react-icons/fa";
// import { FaQuoteRight } from "react-icons/fa";
import BannerComponent from "./BannerComponent";
import GalleryBannerImage from '../assets/WhatsApp Image 2024-09-23 at 4.44.24 PM 1.png';
import DirectorsImage from '../assets/Screenshot_20230702_140639_Instagram.jpg';

const DirectorsMessageComponent = () => {
    return (
        <section>
            <div className="director-container">
                <BannerComponent
                    title="Director's Message"
                    image={GalleryBannerImage}
                    description="Read our Director's message"
                    buttonInformation={<>View Message</>}
                />

                <article className="page-width">
                    <div className="director-article">
                        <p className="opening-message">
                            It gives me great joy to welcome you to the official website of The Kids’ Court School – the best place for your child! Over the years, we have prided ourselves in providing the very best international education to nursery and primary school children in the Lagos metropolis, and we are indeed glad that our children continue to surpass expectations.
                        </p>

                        <p>
                            I invite you to explore all aspects of this website and contact us should you have any enquiries regarding any aspect of our school.
                            Our community is also made up of vibrant teachers and parents who are very much partners, committed to working together on the journey of providing an excellent education to their children.
                        </p>     

                        <div className="director-closing">
                            <img className="director-image" alt="Director" src={DirectorsImage} />
                            <ul className="director-info">
                                <li>Best Regards,</li>
                                <li className="bold">Dr. Abimbola Banu-Ogundere</li>
                                <li className="bold">Director, Kids’ Court School</li>
                            </ul>    
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default DirectorsMessageComponent;
