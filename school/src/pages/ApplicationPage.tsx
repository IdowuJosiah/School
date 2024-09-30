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
        <form className="application-form">
          
          {/* SECTION 1 */}
          <div className="form-section">
            <div className="form-section-header">
              <header className="section-header">SECTION 1</header>
              <p className="requirement">Please fill out the information below</p>
            </div>
            
            <label>Full Name</label>
            <div className="triple-input">
              <input type="text" placeholder="Surname" className="name-part" id="surname" />
              <input type="text" placeholder="First Name" className="name-part" id="middleName" />
              <input type="text" placeholder="Middle Name" className="name-part" id="lastName" />
            </div>

            <div className="triple-option container">
              <div className="input-option">
                <label>Date of birth</label>
                <input type="date" placeholder="day/month/year" className="input-field" />
              </div>
              
              <div className="input-option">
                <label>Gender</label>
                <input type="text" placeholder="Male/Female" className="input-field" />
              </div>
              
              <div className="input-option">
                <label>Nationality</label>
                <input type="text" placeholder="Nationality" className="input-field" />
              </div>
            </div>

            <div className="single-input container">
              <label>Residential Address</label>
              <input type="text" placeholder="Full address" className="input-field" />
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
              <input type="text" placeholder="Surname" className="name-part" id="surname" />
              <input type="text" placeholder="First Name" className="name-part" id="middleName" />
              <input type="text" placeholder="Middle Name" className="name-part" id="lastName" />
            </div>

            <div className="triple-option container">
              <div className="input-option">
                <label>Relationship to student</label>
                <input type="text" placeholder="" className="input-field" />
              </div>
              
              <div className="input-option">
                <label>Contact Phone Number</label>
                <input type="text" placeholder="" className="input-field" />
              </div>

              <div className="input-option">
                <label>Emergency contact</label>
                <input type="text" placeholder="" className="input-field" />
              </div>
            </div>

            <div className="single-input container">
              <label>Email Address</label>
              <input type="text" placeholder="johndoe@gmail.com" className="input-field" />
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
              <input type="text" placeholder="" className="input-field" />
            </div>

            <div className="single-input container">
              <label>Reason for a change of school</label>
              <input type="text" placeholder="" className="input-field" />
            </div>

            <div className="single-input container">
              <label>Grade you are applying for</label>
              <input type="text" placeholder="Between creche and primary 5" className="input-field" />
            </div>

            <div className="single-input container">
              <label>Other Needs (Accommodation, school bus e.t.c)</label>
              <input type="text" placeholder="Please specify" className="input-field" />
            </div>
          </div>

            <footer className='form-footer'>Additional required information will be requested during your visit to the school.</footer>
            <div className="submit-button-container">
            <button className='submit-button'>
                <a href="/apply-for-admission">Submit Application form</a>
            </button>
            </div>
        </form>
      </div>
      <Footer/>
    </section>
  );
};

export default ApplicationPage;
