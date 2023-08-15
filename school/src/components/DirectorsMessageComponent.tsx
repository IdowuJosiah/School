import React from "react";
import "../css/DirectorsMessageComponent.css"

const DirectorsMessageComponent = () => {
    return(
        <section>
            <div className="director-container">
                <header className="director-header director-page-width ">
                    <div className="director-header-container">
                        <img alt="hb" src="c62fe96f-d63d-44b9-bbf5-6167c6f49de2.JPG"/>
                    </div>
                </header>
                <article className="director-page-width">
                    <div className="director-article">
                        <p className="director-article-text">
                            It gives me great joy to welcome you to the official website of The Kids’ Court School – the best place for your child!
                            Over the years, we have prided ourselves in providing the very best international
                            education to nursery and primary school children in the Lagos metropolis,
                            and we are indeed glad that our children continue to surpass expectations
                        </p>
                        <p className="director-image">
                            <img alt="kjghd" src="./Screenshot_20230702_140639_Instagram.jpg"/>
                        </p>
                    </div>
                    <div className="director-article-footer">
                        <p>
                            Our community is also made up of vibrant teachers and parents who are very much partners
                            committed to working together
                            on the journey of providing an excellent education to their children.
                        </p>
                        <p>
                            I invite you to explore all aspects of this website and contact us should
                            you have any enquiry as to any aspect of our school.
                        </p>
                        <p>
                            Best Regards,
                        </p>
                        <p>
                            Dr. Abimbola Banu-Ogundere
                        </p>
                        <p>
                            (Director, Kids’ Court School)
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}
export default DirectorsMessageComponent