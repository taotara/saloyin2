import './importAndExport.css';
import TitleBar from "../../../layout/components/titleBar/TitleBar";
import Footer from "../../../layout/footer/Footer";
import Header from "../../../layout/header/Header";
import ServicesBg from "../../../assets/services-bg.jpg";
import ServicesSideMenu from '../../../layout/components/servicesSideMenu/ServicesSideMenu';

function ImportAndExport() {
  return (
    <div>
      <Header />
      <TitleBar title="Import & Export Services" titleBg={ServicesBg} />
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="side-menu">
              <ServicesSideMenu />
            </div>
            <main>Main</main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ImportAndExport