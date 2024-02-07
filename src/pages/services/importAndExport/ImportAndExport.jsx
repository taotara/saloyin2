import './importAndExport.css';
import TitleBar from "../../../layout/components/titleBar/TitleBar";
import Footer from "../../../layout/footer/Footer";
import Header from "../../../layout/header/Header";
import ServicesBg from "../../../assets/services-bg.jpg";
import ServicesSideMenu from '../../../layout/components/servicesSideMenu/ServicesSideMenu';
import Cargo from "../../../assets/cargo.jpg";
import Boxes from "../../../assets/boxes.jpg";

function ImportAndExport() {
  return (
    <div>
      <Header />
      <TitleBar title="Import & Export Services" titleBg={ServicesBg} />
      <div className="imp-exp">
        <div className="container">
          <div className="row">
            <div className="side-menu">
              <ServicesSideMenu />
            </div>
            <main>
              <div className="imp-exp-img">
                <div className="imp-exp-img1">
                  <img src={Boxes} alt="Packages" />
                </div>
                <div className="imp-exp-img2">
                  <img src={Cargo} alt="Cargo ship" />
                </div>
              </div>
              <div className="contents">
                <h4>Are you looking to import or export goods?</h4>
                <p>
                  If so, you need to work with a company that understands the
                  import and export process and can help you navigate the
                  complexities of international trade.
                </p>
                <p>
                  At SALOYIN GLOBAL, we have over 10 years of experience in the
                  import and export industry. We know the ins and outs of the
                  process, and we can help you get your products where they need
                  to go quickly and efficiently.
                </p>
                <h4>
                  We offer a wide range of import and export services,
                  including:
                </h4>
                <ul className="list">
                  <li className="list-items">
                    <b>Customs clearance:</b> We can help you clear your goods
                    through customs so that they can be released into the
                    country.
                  </li>
                  <li className="list-items">
                    <b>Freight forwarding:</b> We can arrange for your goods to
                    be shipped to their destination.
                  </li>
                  <li className="list-items">
                    <b>Insurance:</b> We can help you get insurance for your
                    goods so that you are protected in case of loss or damage.
                  </li>
                  <li className="list-items">
                    <b>Documentation:</b> We can help you with all of the
                    necessary documentation, such as import permits and export
                    licenses.
                  </li>
                </ul>
                <h4>
                  We also offer a variety of value-added services, such as:
                </h4>
                <ul className="list">
                  <li className="list-items">
                    <b>Warehousing:</b> We can store your goods in our warehouse
                    until they are ready to be shipped.
                  </li>
                  <li className="list-items">
                    <b>Packaging:</b> We can help you package your goods so that
                    they are safe during shipping.
                  </li>
                  <li className="list-items">
                    <b>Labelling:</b> We can label your goods so that they are
                    compliant with the importing country&apos;s regulations.
                  </li>
                </ul>
                <p>
                  We&apos;re committed to providing our customers with the best
                  possible service. That&apos;s why we offer a satisfaction
                  guarantee on all of our work. If you&apos;re not happy with
                  our services, simply return them for a full refund.
                </p>
                <p className="call-to-action">
                  Contact us today to learn more about our import & export
                  services. We&apos;d be happy to answer your questions and help
                  you get started.
                </p>

                <h4>Benefits: </h4>
                <ul className="list">
                  <li className="list-items">
                    Experienced and knowledgeable staff: Our team of experienced
                    and knowledgeable staff has the expertise to help you
                    navigate the complexities of international trade.
                  </li>
                  <li className="list-items">
                    Convenient and affordable: We offer convenient and
                    affordable import & export services, so you can get the job
                    done without breaking the bank.
                  </li>
                  <li className="list-items">
                    Excellent customer service: We&apos;re committed to
                    providing our customers with excellent customer service.
                    We&apos;ll work with you to understand your needs and ensure
                    that you&apos;re happy with the results.
                  </li>
                </ul>
                <h4>Conclusion:</h4>
                <p>
                  If you&apos;re looking for a company that can help you import
                  or export goods, look no further than SALOYIN LIMITED! We have
                  the experience, expertise, and customer service to get the job
                  done right. Contact us today to learn more.
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

export default ImportAndExport