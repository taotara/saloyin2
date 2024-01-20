import './contactSection.css';
import ContactGirl from "../../../assets/contact-section-girl.png";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="cs-left">
            <div className="contact-box">
              <h2>We Offering The Best Experience In Services</h2>
              <div className="phone-box">
                <i className="fa-solid fa-phone-volume"></i>
                <div className="phone-detail">
                  <p><span>CALL US TODAY</span><br />+234 803 344 6377, +234 807 213 133</p>
                </div>
              </div>
              <button className="btn btn-thirtiary">
                Get In Touch Today <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="cs-right">
            <img src={ContactGirl} alt="Wecome Girl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection