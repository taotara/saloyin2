import './computerTraining.css';
import TitleBar from "../../../layout/components/titleBar/TitleBar";
import Footer from "../../../layout/footer/Footer";
import Header from "../../../layout/header/Header";
import ServicesBg from "../../../assets/services-bg.jpg";
import ServicesSideMenu from '../../../layout/components/servicesSideMenu/ServicesSideMenu';

function ComputerTraining() {
  return (
    <div>
      <Header />
      <TitleBar
        title="Computer Software & Hardware Training"
        titleBg={ServicesBg}
      />
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

export default ComputerTraining