import './realEstate.css';
import TitleBar from "../../../layout/components/titleBar/TitleBar";
import Footer from "../../../layout/footer/Footer";
import Header from "../../../layout/header/Header";
import ServicesBg from "../../../assets/services-bg.jpg";
import ServicesSideMenu from '../../../layout/components/servicesSideMenu/ServicesSideMenu';
import Estate from "../../../assets/estate.jpg";
import RealEstateBuilding from "../../../assets/real-estate.jpg";


function RealEstate() {
  return (
    <div>
      <Header />
      <TitleBar title="Real Estate Services" titleBg={ServicesBg} />
      <div className="real-estate">
        <div className="container">
          <div className="row">
            <div className="side-menu">
              <ServicesSideMenu />
            </div>
            <main>
              <div className="real-estate-img">
                <div className="real-estate-img1">
                  <img
                    src={Estate}
                    alt="Model of a building on a building plan"
                  />
                </div>
                <div className="real-estate-img2">
                  <img
                    src={RealEstateBuilding}
                    alt="Smilling lady in front of a building under construction"
                  />
                </div>
              </div>
              <div className="contents">
                <h4>Are you looking to buy or sell a home? </h4>
                <p>
                  If so, you need the help of a real estate agent who can help
                  you find the perfect property for your needs.
                </p>
                <p>
                  At SALOYIN PROPERTIES, we have a team of experienced and
                  knowledgeable real estate agents who can help you every step
                  of the way. We&apos;ll work with you to understand your needs
                  and budget, and we&apos;ll show you properties that meet your
                  criteria.
                </p>
                <h4>
                  We offer a wide range of real estate services, including:
                </h4>
                <ul className="list">
                  <li className="list-items">
                    <b>Buying:</b> We&apos;ll help you find the perfect home for
                    your needs and budget. We&apos;ll negotiate on your behalf
                    and make sure you get the best possible deal.
                  </li>
                  <li className="list-items">
                    <b>Selling:</b> We&apos;ll list your home for sale and
                    market it to potential buyers. We&apos;ll negotiate on your
                    behalf and get you the highest possible price.
                  </li>
                  <li className="list-items">
                    <b>Property management:</b> We&apos;ll manage your rental
                    property and take care of all the day-to-day tasks, so you
                    can relax and enjoy your investment.
                  </li>
                </ul>
                <p>
                  We&apos;re committed to providing our clients with the best
                  possible service. That&apos;s why we offer a satisfaction
                  guarantee on all of our work. If you&apos;re not happy with
                  our services, simply contact us and we&apos;ll make it right.
                </p>

                <p className="call-to-action">
                  Contact us today to learn more about our real estate services.
                  We&apos;d be happy to answer your questions and help you find
                  the perfect property for your needs.
                </p>

                <h4>Benefits: </h4>
                <ul className="list">
                  <li className="list-items">
                    Experienced and knowledgeable real estate agents: Our team
                    of real estate agents has years of experience in the
                    industry and knows the market inside and out.
                  </li>
                  <li className="list-items">
                    • Convenient and affordable: We offer convenient and
                    affordable real estate services, so you can get the help you
                    need without breaking the bank.
                  </li>
                  <li className="list-items">
                    • Excellent customer service: We&apos;re committed to
                    providing our clients with excellent customer service.
                    We&apos;ll work with you to understand your needs and make
                    sure you&apos;re happy with the results.
                  </li>
                </ul>
                <h4>Conclusion:</h4>
                <p>
                  If you&apos;re looking for a real estate agent who can help
                  you find the perfect property for your needs, look no further
                  than SALOYIN LIMITED! We have the experience, expertise, and
                  customer service to get the job done right. Contact us today
                  to learn more.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RealEstate