import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import BusinessRegistration from './pages/services/businessRegistration/BusinessRegistration';
import GeneralSupplies from './pages/services/generalSupplies/GeneralSupplies';
import GeneralPrintingServices from './pages/services/generalPrintingServices/GeneralPrintingServices';
import ImportAndExport from './pages/services/importAndExport/ImportAndExport';
import ComputerTraining from './pages/services/computerTraining/ComputerTraining';
import RealEstate from './pages/services/realEstate/RealEstate';
import ScrollToTop from './layout/components/scrollToTop';

function App() {
  

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/business registration"
          element={<BusinessRegistration />}
        />
        <Route
          path="/services/general supplies"
          element={<GeneralSupplies />}
        />
        <Route
          path="/services/general printing services"
          element={<GeneralPrintingServices />}
        />
        <Route
          path="/services/import and export services"
          element={<ImportAndExport />}
        />
        <Route
          path="/services/computer software and hardware training"
          element={<ComputerTraining />}
        />
        <Route path="/services/real estate services" element={<RealEstate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App
