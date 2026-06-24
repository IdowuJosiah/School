import React from 'react';
import '../css/ApplicationPage.scss';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ApplicationPage = () => {
  return (
    <section>
      <NavBar />
      <div className="application-section page-width">
        <header className="admission-header">ADMISSION SIGN UP FORM</header>
        <form
          className="application-form"
          action="https://formsubmit.co/admin@thehoneyrockacademy.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New Admission Application - Honey Rock School" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          {/* SECTION 1 */}
          <div className="form-section">
            <div className="form-section-header">
              <header className="section-header">SECTION 1</header>
              <p className="requirement">Please fill out the information below</p>
            </div>

            <label>Full Name</label>
            <div className="triple-input">
              <input type="text" placeholder="Surname" className="name-part" name="surname" required />
              <input type="text" placeholder="First Name" className="name-part" name="first_name" required />
              <input type="text" placeholder="Middle Name" className="name-part" name="middle_name" />
            </div>

            <div className="triple-option container">
              <div className="input-option">
                <label>Date of birth</label>
                <input type="date" className="input-field" name="date_of_birth" required />
              </div>

              <div className="input-option">
                <label>Gender</label>
                <input type="text" placeholder="Male/Female" className="input-field" name="gender" required />
              </div>

              <div className="input-option">
                <label>Nationality</label>
                <input type="text" placeholder="Nationality" className="input-field" name="nationality" required />
              </div>
            </div>

            <div className="single-input container">
              <label>Residential Address</label>
              <input type="text" placeholder="Full address" className="input-field" name="residential_address" required />
            </div>
          </div>

          {/* SECTION 2 */}
          <div className="form-section">
            <div className="form-section-header">
              <header className="section-header">SECTION 2</header>
              <p className="requirement">Please fill out the information below</p>
            </div>

            <label>Parent/Guardian Full Name</label>
            <div className="triple-input">
              <input type="text" placeholder="Surname" className="name-part" name="guardian_surname" required />
              <input type="text" placeholder="First Name" className="name-part" name="guardian_first_name" required />
              <input type="text" placeholder="Middle Name" className="name-part" name="guardian_middle_name" />
            </div>

            <div className="triple-option container">
              <div className="input-option">
                <label>Relationship to student</label>
                <input type="text" className="input-field" name="relationship" required />
              </div>

              <div className="input-option">
                <label>Contact Phone Number</label>
                <input type="tel" className="input-field" name="phone_number" required />
              </div>

              <div className="input-option">
                <label>Emergency contact</label>
                <input type="tel" className="input-field" name="emergency_contact" required />
              </div>
            </div>

            <div className="single-input container">
              <label>Email Address</label>
              <input type="email" placeholder="johndoe@gmail.com" className="input-field" name="email" required />
            </div>
          </div>

          {/* SECTION 3 */}
          <div className="form-section">
            <div className="form-section-header">
              <header className="section-header">SECTION 3</header>
              <p className="requirement">Please fill out the information below</p>
            </div>

            <div className="single-input container">
              <label>Previous school attended</label>
              <input type="text" className="input-field" name="previous_school" />
            </div>

            <div className="single-input container">
              <label>Reason for a change of school</label>
              <input type="text" className="input-field" name="reason_for_change" />
            </div>

            <div className="single-input container">
              <label>Grade you are applying for</label>
              <input type="text" placeholder="Between creche and primary 5" className="input-field" name="grade_applying_for" required />
            </div>

            <div className="single-input container">
              <label>Other Needs (Accommodation, school bus e.t.c)</label>
              <input type="text" placeholder="Please specify" className="input-field" name="other_needs" />
            </div>
          </div>

          <footer className='form-footer'>Additional required information will be requested during your visit to the school.</footer>
          <div className="submit-button-container">
            <button type="submit" className='submit-button'>
              Submit Application form
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default ApplicationPage;
