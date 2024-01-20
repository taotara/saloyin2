import "./footer.css";
import FooterLogo from "../../assets/footer-logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-about">
              <img src={FooterLogo} alt="Saloyin Logo" />
              <p>
                SALOYIN LIMITED is a company based and registered in Nigeria on
                the 7th of November 2006 and it has been in business since 2001.
                We have a team of experts who are highly skilled and
                experienced. With more than 22 years of working experience.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-services">
              <h5 className="footer-heading">Services</h5>
              <ul className="footer-links">
                <li className="footer-link-item">
                  <Link to="/services/business registration">
                    Business Registration
                  </Link>
                </li>
                <li className="footer-link-item">
                  <Link to="/services/general supplies">General Supplies</Link>
                </li>
                <li className="footer-link-item">
                  <Link to="/services/general printing services">
                    General Printing Services
                  </Link>
                </li>
                <li className="footer-link-item">
                  <Link to="/services/import and export services">
                    Import & Export Services
                  </Link>
                </li>
                <li className="footer-link-item">
                  <Link to="">Real Estate Services</Link>
                </li>
                <li className="footer-link-item">
                  <Link to="/services/computer software and hardware training">
                    Computer Software and Hardware Training
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-contact">
              <h5 className="footer-heading">Contact Info</h5>
              <ul className="contact-list">
                <li className="contact-item">
                  <h6>Address</h6>
                  <p>37, Layi-Oyekanmi Street, Mushin, Lagos, Nigeria</p>
                </li>
                <li className="contact-item">
                  <h6>Phone</h6>
                  <p>+234 803 344 6377, +234 807 213 133</p>
                </li>
                <li className="contact-item">
                  <h6>Email</h6>
                  <p>info@saloyin.com.ng</p>
                </li>
                <li className="contact-item">
                  <h6>Follow Us</h6>
                  <ul className="socials">
                    <li>
                      <Link to="\">
                        <i className="fa-brands fa-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="\">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="\">
                        <i className="fa-brands fa-x-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="\">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="\">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-newsletter">
              <h5 className="footer-heading">Subscribe Newsletter</h5>
              <p>
                We make sure to only send emails that are noteworthy and
                pertinent to the recipient.
              </p>
              <form>
                <input type="text" placeholder="Email Address" />
                <button className="footer-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="copy">
          <p>Copyright © 2023 Saloyin Limited | All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
