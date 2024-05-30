import React from "react"
import ParentsReview from "./ParentsReview";
import "../css/ParentFeedbackComponent.css"
const ParentFeedbackComponent=() =>{
    return(
        <div className="admission-page-width">
            <header className="parent-feedback-header">
                <h2>
                    PARENTS VOICES : SHARING OUR HONEY ROCK EXPERIENCES
                </h2>
            </header>
            <div className="parent-feedback-text">
                    <p>
                        At Honey Rock Schools, we believe in the power of community and collaboration.
                        We understand that choosing the right school for your child is a significant decision,
                        and we greatly value the insights and experiences of our parents.
                    </p>
                    <p>
                        On this page, we invite Honey Rock Schools parents to share their thoughts,
                        feedback, and stories about their journey with us. Whether it's a heartfelt testimonial,
                        a reflection on your child's growth, or simply a word of appreciation for our dedicated
                        faculty and staff, your voices matter.
                    </p>
                    <p>
                        Your reviews provide valuable guidance to prospective parents seeking to make an informed
                        choice about their child's education. They also help us continuously improve and uphold
                        the high standards of education and support that Honey Rock Schools is known for.
                    </p>
                    <p>
                        We encourage you to read and contribute to the vibrant tapestry of experiences shared here.
                        Together, we can paint a picture of what it means to be a part of the Honey Rock Schools family.
                    </p>
                    <p>
                        Thank you for being a crucial part of our community, and for helping others embark on their own
                        Honey Rock Schools journey."
                    </p>
            </div>
            <div>
                <ParentsReview/>
            </div>
        </div>
    )
}
export default ParentFeedbackComponent