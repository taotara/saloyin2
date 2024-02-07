import TitleBar from "../../../layout/components/titleBar/TitleBar";
import Footer from "../../../layout/footer/Footer";
import Header from "../../../layout/header/Header";
import "./businessRegistration.css";
import ServicesBg from "../../../assets/services-bg.jpg";
import ServicesSideMenu from "../../../layout/components/servicesSideMenu/ServicesSideMenu";
import BusinessReg from "../../../assets/bus-reg.jpg";
import CacLogo from "../../../assets/cac.png";

function BusinessRegistration() {
  return (
    <div>
      <Header />
      <TitleBar title="Business Registration" titleBg={ServicesBg} />
      <div className="bus-reg">
        <div className="container">
          <div className="row">
            <div className="side-menu">
              <ServicesSideMenu />
            </div>
            <main>
              <div className="bus-reg-img">
                <div className="bus-reg-img1">
                  <img src={CacLogo} alt="CAC logo" />
                </div>
                <div className="bus-reg-img2">
                  <img
                    src={BusinessReg}
                    alt="Young business man on phone and writing"
                  />
                </div>
              </div>
              <div className="contents">
                <h2>
                  REGISTRATION OF BUSINESS WITH CORPORATE AFFAIRS COMMISSION
                  C.A.C.
                </h2>
                <p>
                  Let us boost public confidence in your business by getting it
                  registered under CAC
                </p>
                <p>
                  We help to register your business – Enterprise, Limited, and
                  Non-governmental organization under the corporate affairs
                  commission with 7 working days delivery time.
                </p>
                <p>
                  We put your ideas into action by helping you incorporate or
                  register the most appropriate form of entity. We can also
                  assist when you want to make changes to an existing
                  registration (Post Incorporation).
                </p>
                <p>
                  Let us boost public confidence in your business by getting it
                  registered under CAC
                </p>
                <h4>
                  Are you, in need of assistance to enhance your business
                  growth? If that&apos;s the case you&apos;ve come to the place. Our
                  team comprises consultants who can assist you with an array of
                  challenges including;
                </h4>
                <ul className="list">
                  <li className="list-items">
                    Develop a well-defined and practical strategy for your
                    business.
                  </li>
                  <li className="list-items">
                    Enhancing your marketing and sales efforts to attract
                    customers and boost revenue.
                  </li>
                  <li className="list-items">
                    Improving your operations to increase efficiency and
                    productivity.
                  </li>
                  <li className="list-items">
                    Select appropriate technology solutions for your business.
                    Implementing them effectively.
                  </li>
                </ul>
                <h4>Benefits Of Using Saloyin Consult: </h4>
                <ul className="list">
                  <li className="list-items">
                    Expert guidance; Our team consists of consultants who
                    possess an understanding of the challenges faced by
                    businesses today. We can help you identify the causes of
                    your issues and develop tailored solutions that suit your
                    circumstances.
                  </li>
                  <li className="list-items">
                    Actionable insights; We don&apos;t simply point out what&apos;s wrong
                    with your business; we also equip you with the tools and
                    resources to make improvements. Our consultants will
                    collaborate with you to devise an action plan providing
                    support at every step, along the way.
                  </li>
                  <li className="list-items">
                    We are extremely confident, in our ability to assist you in
                    achieving your goals. This is why we offer a money-back
                    guarantee. If you find our services unsatisfactory you have
                    the option to cancel your contract at any time.
                  </li>
                  <li className="list-items">
                    If you require assistance in expanding your business we
                    strongly urge you to get in touch with us without delay. Our
                    team will gladly address any inquiries you may have and
                    arrange a consultation, at your convenience.
                  </li>
                </ul>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BusinessRegistration;
