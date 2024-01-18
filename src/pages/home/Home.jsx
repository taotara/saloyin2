import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import AboutSection from "./aboutSection/AboutSection";
import ClienteleSection from "./clienteleSection/ClienteleSection";
import Hero from "./hero/Hero";
import ServicesSection from "./servicesSection/ServicesSection";
import WhatSetsUsApart from "./whatSetsUsApart/WhatSetsUsApart";

function Home() {
  return <div>
    <Header />
    <Hero />
    <ClienteleSection />
    <AboutSection />
    <ServicesSection />
    <WhatSetsUsApart />
    <Footer />
  </div>;
}

export default Home;
