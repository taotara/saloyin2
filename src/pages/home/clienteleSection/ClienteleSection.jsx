import "./clienteleSection.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Web24 from "/clients/web24.jpg";
import Kingbuilder from "/clients/kingbuilder.jpg";
import SnowBlack from "/clients/snowblack.jpg";
import MastersVille from "/clients/mastersville.jpg";

function ClienteleSection() {

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };

  return (
    <section className="clientele-section">
      <Slider {...settings}>
        <div>
          <img src={Web24} alt="Web24" />
        </div>
        <div>
          <img src={Kingbuilder} alt="Kingbuilder" />
        </div>
        <div>
          <img src={SnowBlack} alt="SnowBlack" />
        </div>
        <div>
          <img src={MastersVille} alt="Masters Ville" />
        </div>
        
      </Slider>
    </section>
  );
}

export default ClienteleSection;
