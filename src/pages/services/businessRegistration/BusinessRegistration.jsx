import TitleBar from '../../../layout/components/titleBar/TitleBar';
import Footer from '../../../layout/footer/Footer';
import Header from '../../../layout/header/Header';
import './businessRegistration.css';
import ServicesBg from "../../../assets/services-bg.jpg";
import ServicesSideMenu from '../../../layout/components/servicesSideMenu/ServicesSideMenu';
import BusinessReg from '../../../assets/bus-reg.jpg';

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
              <img src={BusinessReg} alt="" /> 
              Main
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BusinessRegistration