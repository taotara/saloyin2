import './generalSupplies.css';
import TitleBar from "../../../layout/components/titleBar/TitleBar";
import Footer from "../../../layout/footer/Footer";
import Header from "../../../layout/header/Header";
import ServicesBg from "../../../assets/services-bg.jpg";
import ServicesSideMenu from '../../../layout/components/servicesSideMenu/ServicesSideMenu';
import Sanitary from "../../../assets/sanitary.jpg";
import Supplies from "../../../assets/supplies.jpg";



function GeneralSupplies() {
  return (
    <div>
      <Header />
      <TitleBar title="General Supplies" titleBg={ServicesBg} />
      <div className="gen-supplies">
        <div className="container">
          <div className="row">
            <div className="side-menu">
              <ServicesSideMenu />
            </div>
            <main>
              <div className="gen-supplies-img">
                <div className="gen-supplies-img1">
                  <img src={Sanitary} alt="CAC logo" />
                </div>
                <div className="gen-supplies-img2">
                  <img
                    src={Supplies}
                    alt="Young business man on phone and writing"
                  />
                </div>
              </div>
              <div className="contents">
                <h4>
                  Do you need a one-stop shop for all your general supplies?
                  Look no further than SALOYIN LIMITED!
                </h4>
                <p>
                  We carry a wide variety of products, from office supplies to
                  janitorial supplies to industrial supplies. We&apos;re sure to
                  have everything you need to keep your business running
                  smoothly.
                </p>
                <h4>Here are just a few of the products we offer:</h4>
                <ul className="list">
                  <li className="list-items">
                    <b>Office supplies:</b> Paper, pens, pencils, staplers,
                    scissors, highlighters, binders, folders, etc.
                  </li>
                  <li className="list-items">
                    <b>Janitorial supplies:</b> Paper towels, toilet paper, hand
                    soap, disinfectant wipes, mops, brooms, dustpans, etc.
                  </li>
                  <li className="list-items">
                    <b>Industrial supplies:</b> Safety gear, tools, hardware,
                    cleaning supplies, etc.
                  </li>
                </ul>
                <h4>We also offer a variety of services, such as:</h4>
                <ul className="list">
                  <li className="list-items">
                    <b>Shipping and delivery:</b> We can ship your supplies to
                    your door or deliver them to your business.
                  </li>
                  <li className="list-items">
                    <b>Restocking:</b> We can help you keep your inventory
                    stocked so you never run out of supplies.
                  </li>
                  <li className="list-items">
                    <b>Custom orders:</b> We can create custom orders to meet
                    your specific needs.
                  </li>
                </ul>
                <p>
                  We&apos;re committed to providing our customers with the best
                  possible service. That&apos;s why we offer a satisfaction
                  guarantee on all of our products and services. If you&apos;re
                  not happy with your purchase, simply return it for a full
                  refund.
                </p>
                <p className="call-to-action">
                  Contact us today to learn more about our general supplies
                  services. We&apos;d be happy to answer your questions and help
                  you find the products and services you need.
                </p>

                <h4>Benefits: </h4>
                <ul className="list">
                  <li className="list-items">
                    Wide selection of products: We carry a wide variety of
                    products, so you&apos;re sure to find everything you need.
                  </li>
                  <li className="list-items">
                    Convenient one-stop shopping: You can find everything you
                    need in one place, so you don&apos;t have to go to multiple
                    stores.
                  </li>
                  <li className="list-items">
                    Excellent customer service: We&apos;re committed to
                    providing our customers with the best possible service.
                  </li>
                  <li className="list-items">
                    Satisfaction guarantee: We&apos;re so confident in our
                    products and services that we offer a satisfaction
                    guarantee.
                  </li>
                </ul>
                <h4>Conclusion:</h4>
                <p>
                  If you&apos;re looking for a one-stop shop for all your
                  general supplies, look no further than SALOYIN LIMITED!
                  We&apos;re sure to have everything you need to keep your
                  business running smoothly. Contact us today to learn more.
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

export default GeneralSupplies