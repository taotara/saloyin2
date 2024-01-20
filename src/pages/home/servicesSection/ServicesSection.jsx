import "./ServicesSection.css";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    icon: "/services-icons/bus-reg.png",
    company: "SALOYIN CONSULT",
    service: "Business Registration",
    details:
      "Let us boost public confidence in your business by getting it registered under CAC business – Enterprise, Limited, and Non-governmental organization under the corporate affairs commission with 7 working days delivery time",
    servurl: "/services/business registration",
  },
  {
    id: 2,
    icon: "/services-icons/gen-supply.png",
    company: "SALOYIN BIZ",
    service: "General Supplies",
    details:
      "Do you need a one-stop shop for all your general supplies? Look no further than SALOYIN LIMITED! We carry a wide variety of products, from office supplies to janitorial supplies to industrial supplies.",
    servurl: "/services/general supplies",
  },
  {
    id: 3,
    icon: "/services-icons/printing.png",
    company: "SALOYIN PRINTS",
    service: "General Printing Services",
    details:
      "Need high-quality printing services? Look no further than SALOYIN LIMITED! We offer a wide range of printing services, including:\n Business cards: We can help you create professional business cards that will help you stand out from the competition.",
    servurl: "/services/general printing services",
  },
  {
    id: 4,
    icon: "/services-icons/imp-exp.png",
    company: "SALOYIN GLOBAL",
    service: "Import & Export Services",
    details:
      "Are you looking to import or export goods? If so, you need to work with a company that understands the import and export process and can help you navigate the complexities of international trade.",
    servurl: "/services/import and export services",
  },
  {
    id: 5,
    icon: "/services-icons/comp-training.png",
    company: "SALOYIN SYSTEM",
    service: "Computer Software & Hardware Training",
    details:
      "In today's digital world, it's more important than ever to have the skills to use computers and technology effectively. Whether you're looking to advance your career, start your own business, or simply stay up-to-date",
    servurl: "/services/computer software and hardware training",
  },
  {
    id: 6,
    icon: "/services-icons/real-estate.png",
    company: "SALOYIN PROPERTIES",
    service: "Real Estate Services",
    details:
      "At SALOYIN LIMITED, we have a team of experienced and knowledgeable real estate agents who can help you every step of the way. We'll work with you to understand your needs and budget, and we'll show you properties that meet your criteria.",
    servurl: "/services/real estate services",
  },
];



function ServicesSection() {

  const navigate = useNavigate(); 
  const goToService = () => navigate("{d.servurl}");

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-top">
          <h4>OUR SERVICES</h4>
          <h2>Explore Our Wide Range of Top Notch Services</h2>
        </div>
        <div className="services-bottom">
          <div className="row">
            {data.map((d) => (
              <div className="col-md-4" key={d.id}>
                <div className="card">
                  <div className="card-top">
                    <div className="service-icon">
                      <img src={d.icon} alt={d.service} />
                    </div>
                    <div className="v-divide"></div>
                    <div className="service-name-company">
                      <h5>{d.company}</h5>
                      <h5>{d.service}</h5>
                    </div>
                  </div>
                  <div className="card-bottom">
                    <p>{d.details}</p>
                    <button className="btn btn-secondary" onClick={goToService}>
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
