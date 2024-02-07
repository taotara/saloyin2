import "./genralPrintingServices.css";
import TitleBar from "../../../layout/components/titleBar/TitleBar";
import Footer from "../../../layout/footer/Footer";
import Header from "../../../layout/header/Header";
import ServicesBg from "../../../assets/services-bg.jpg";
import ServicesSideMenu from "../../../layout/components/servicesSideMenu/ServicesSideMenu";
import PrintMat from "../../../assets/print-materials.jpg";
import Print from "../../../assets/printing.jpg";

function GeneralPrintingServices() {
  return (
    <div>
      <Header />
      <TitleBar title="General Printing Services" titleBg={ServicesBg} />
      <div className="gen-printing">
        <div className="container">
          <div className="row">
            <div className="side-menu">
              <ServicesSideMenu />
            </div>
            <main>
              <div className="gen-printing-img">
                <div className="gen-printing-img1">
                  <img src={PrintMat} alt="CAC logo" />
                </div>
                <div className="gen-printing-img2">
                  <img
                    src={Print}
                    alt="Young business man on phone and writing"
                  />
                </div>
              </div>
              <div className="contents">
                <h4>
                  Need high-quality printing services? Look no further than
                  SALOYIN LIMITED! We offer a wide range of printing services,
                  including:
                </h4>
                <ul className="list">
                  <li className="list-items">
                    <b>Business cards:</b> We can help you create professional
                    business cards that will help you stand out from the
                    competition.
                  </li>
                  <li className="list-items">
                    <b>Letterheads:</b> We can create custom letterheads that
                    will match your company&apos;s branding.
                  </li>
                  <li className="list-items">
                    <b>Envelopes:</b> We can print envelopes in a variety of
                    sizes and colors.
                  </li>
                  <li className="list-items">
                    <b>Postcards:</b> We can print postcards that are perfect
                    for marketing your business.
                  </li>
                  <li className="list-items">
                    <b>Flyers:</b> We can print flyers that will help you spread
                    the word about your upcoming event.
                  </li>
                  <li className="list-items">
                    <b>Banners:</b> We can print banners that are perfect for
                    trade shows and other events.
                  </li>
                  <li className="list-items">
                    <b>Signs:</b> We can print signs that will help you direct
                    traffic or promote your business.
                  </li>
                  <li className="list-items">
                    <b>Labels:</b> We can print labels for a variety of
                    products.
                  </li>
                </ul>
                <h4>We offer a variety of printing options, including:</h4>
                <ul className="list">
                  <li className="list-items">
                    <b>Digital printing:</b> This is a fast and affordable
                    printing option that is perfect for small jobs.
                  </li>
                  <li className="list-items">
                    <b>Offset printing:</b> This is a more high-quality printing
                    option that is perfect for large jobs.
                  </li>
                  <li className="list-items">
                    <b>Screen printing:</b> This is a printing option that is
                    perfect for printing on fabric.
                  </li>
                </ul>
                <h4>We also offer a variety of finishing options, such as:</h4>
                <ul className="list">
                  <li className="list-items">
                    <b>Folding:</b> We can fold your printed materials so that
                    they are easy to read and use.
                  </li>
                  <li className="list-items">
                    <b>Stapling:</b> We can staple your printed materials so
                    that they stay together.
                  </li>
                  <li className="list-items">
                    <b>Binding:</b> We can bind your printed materials so that
                    they are easy to carry and store.
                  </li>
                </ul>
                <p>
                  We&apos;re committed to providing our customers with the best
                  possible printing services. That&apos;s why we offer a
                  satisfaction guarantee on all of our work.
                </p>
                <p>
                  Contact us today to learn more about our general printing
                  services. We&apos;d be happy to answer your questions and help
                  you get started.
                </p>
                <h4>Benefits Of Printing With Saloyin Prints: </h4>
                <ul className="list">
                  <li className="list-items">
                    Wide range of printing services: We offer a wide range of
                    printing services, so you can find the perfect solution for
                    your needs.
                  </li>
                  <li className="list-items">
                    Stay up-to-date on the latest trends: Our courses are
                    constantly updated to reflect the latest trends in computer
                    software and hardware.
                  </li>
                  <li className="list-items">
                    High-quality printing: We use high-quality materials and
                    equipment to ensure that your printing job is of the highest
                    quality.
                  </li>
                  <li className="list-items">
                    Convenient and affordable: We offer convenient and
                    affordable printing services, so you can get the job done
                    without breaking the bank.
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
                  If you&apos;re looking for high-quality printing services,
                  look no further than SALOYIN LIMITED! We offer a wide range of
                  printing services, so you can find the perfect solution for
                  your needs. Contact us today to learn more.
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

export default GeneralPrintingServices