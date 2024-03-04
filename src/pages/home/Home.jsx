import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import AboutSection from "./aboutSection/AboutSection";
import ClienteleSection from "./clienteleSection/ClienteleSection";
import ContactSection from "./contactSection/ContactSection";
import Hero from "./hero/Hero";
import ServicesSection from "./servicesSection/ServicesSection";
import Testimonies from "./testimonies/Testimonies";
import WhatSetsUsApart from "./whatSetsUsApart/WhatSetsUsApart";

function Home() {
  return <div>
    <Header />
    <Hero />
    <ClienteleSection />
    <AboutSection />
    <ServicesSection />
    <WhatSetsUsApart />
    <ContactSection />
    <Testimonies />
    <Footer />
  </div>;
}

export default Home;
