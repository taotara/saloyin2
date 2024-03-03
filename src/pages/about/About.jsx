import "./about.css";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import TitleBar from "../../layout/components/titleBar/TitleBar";
import AboutUsBg from "../../assets/about-bg.jpg";
import ExperienceImage from "../../assets/about-left.jpg";
import Understanding from "../../assets/understanding.jpg";
import ClientCentricity from "../../assets/client-centricity.jpg";
import IdentifyChallenges from "../../assets/identify-challenges.jpg";
import WhatSetsUsApart from "../../assets/what-sets-us-apart.jpg";


function About() {
  return (
    <div>
      <Header />
      <TitleBar title="About Us" titleBg={AboutUsBg} />
      <div className="about-us">
        <div className="container">
          <section className="journey">
            <h4 className="subtitle">ABOUT OUR COMPANY</h4>
            <h2 className="title">
              Embark on a journey towards unparalleled growth and innovation
            </h2>
            <div className="journey-grid">
              <div className="journey-grid-left">
                <div className="experience-box">
                  <h3>22+</h3>
                  <h5>
                    Years <br /> Experience
                  </h5>
                </div>
                <div className="experience-image">
                  <img src={ExperienceImage} alt="Smiling young black male" />
                </div>
              </div>
              <div className="journey-grid-right">
                <div className="journey-grid-right-message">
                  <h5>At Saloyin Limited</h5>
                  <h3>
                    we redefine success through strategic insights and
                    transformative solutions.
                  </h3>
                </div>
              </div>
            </div>
          </section>
          <section className="second-base">
            <div className="second-base-content">
              <p>
                SALOYIN LIMITED is a company based and registered in Nigeria on
                the 7th of November 2006 and it has been in business since 2001.
              </p>
              <p>
                We have a team of experts who are highly skilled and
                experienced. With more than 22 years of working experience.
              </p>
              <p>
                At SALOYIN LIMITED, we redefine success through strategic
                insights and transformative solutions. With a foundation built
                on innovation and expertise, we are a premier business
                consulting firm dedicated to driving growth and fostering
                innovation for organizations worldwide.
              </p>
            </div>
          </section>
          <section className="our-approch">
            <div className="our-approch-left">
              <h2 className="title">Our Approach</h2>
              <p>
                Our approach is centered on collaboration, customization, and
                client-centricity. We believe in a holistic understanding of
                your business, working closely to identify challenges and
                capitalize on opportunities. Leveraging a wealth of industry
                experience, our team crafts tailored strategies that align with
                your unique objectives, ensuring sustainable and measurable
                results.
              </p>
            </div>
            <div className="our-approch-right">
              <div className="our-approch-right-left">
                <img
                  src={Understanding}
                  alt="holistic understanding of your business"
                />
                <img src={ClientCentricity} alt="Client Centricity" />
              </div>
              <div className="our-approch-right-right">
                <img src={IdentifyChallenges} alt="Identify Challenges" />
              </div>
            </div>
          </section>
          <section className="sets-us-apart">
            <div className="sets-us-apart-left">
              <img src={WhatSetsUsApart} alt="What sets us apart" />
            </div>
            <div className="sets-us-apart-right">
              <h2 className="title">What Sets Us Apart</h2>
              <article>
                <h4>Seasoned Experts:</h4>
                <p>
                  Our team comprises industry veterans and forward-thinkers,
                  bringing a wealth of diverse experiences to the table.
                </p>
              </article>
              <article>
                <h4>Innovation Focus:</h4>
                <p>
                  We embrace innovation and cutting-edge methodologies to stay
                  ahead of industry trends, delivering solutions that position
                  our clients as leaders in their fields.
                </p>
              </article>
              <article>
                <h4>Global Perspective:</h4>
                <p>
                  Operating in a global landscape, we bring a comprehensive
                  perspective, leveraging cultural insights and diverse market
                  knowledge.
                </p>
              </article>
              <article>
                <h4>Our Promise</h4>
                <p>
                  Partnering with SALOYIN LIMITED means more than consultancy;
                  it signifies a commitment to your success. We strive to be
                  your trusted advisor, guiding you through every stage of your
                  business journey with integrity, agility, and excellence.
                </p>
              </article>
            </div>
          </section>
          <section className="why-choose-us">
            <div className="why-choose-us-left">
              <h2>Why Choose Us</h2>
            </div>
            <div className="why-choose-us-right">
              <article>
                <h4>Proven Track Record:</h4>
                <p>
                  Our portfolio showcases successful collaborations and
                  impactful transformations across various industries.
                </p>
              </article>
              <article>
                <h4>Client-Centric Solutions:</h4>
                <p>
                  Your goals are our priority. We tailor our approach to meet
                  your specific needs, ensuring tangible and sustainable
                  results.
                </p>
              </article>
              <article>
                <h4>Continuous Support:</h4>
                <p>
                  Beyond consultancy, we offer ongoing support, adapting
                  strategies to evolving market landscapes and client
                  requirements.
                </p>
              </article>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
