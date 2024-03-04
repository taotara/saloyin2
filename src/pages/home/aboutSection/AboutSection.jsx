import "./aboutSection.css";
import Welcome from "/welcome.jpg";
import { useNavigate } from "react-router-dom";

function AboutSection() {
  const navigate = useNavigate(); 
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="about-left">
            <img src={Welcome} alt="Smiling girl reaching out her hand" />
          </div>
          <div className="about-right">
            <div className="about-right-top">
              <h4>ABOUT OUR COMPANY</h4>
              <h2>
                Your goals are our priority. We tailor our approach to meet your
                specific needs, ensuring tangible and sustainable results.
              </h2>
              <p>
                At SALOYIN LIMITED, we redefine success through strategic
                insights and transformative solutions. With a foundation built
                on innovation and expertise, we are a premier business
                consulting firm dedicated to driving growth and fostering
                innovation for organizations worldwide.
              </p>
            </div>
            <div className="about-right-bottom">
              <div className="experience">
                <div className="experience-years">
                  <h2>22</h2>
                </div>
                <div className="experience-txt">
                  <h4>
                    YEARS
                    <br /> EXPERIENCE
                    <br /> OF
                    <br /> SERVICE
                  </h4>
                </div>
              </div>
              <button
                className="btn btn-secondary"
                onClick={() => navigate(`/about`)}
              >
                Read More<i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
