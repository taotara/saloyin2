import "./testimonies.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimoniesGuy from "../../../assets/testimony-guy.png";

function Testimonies() {
  const data = [
    {
      id: 1,
      name: "John Adewale",
      post: "CEO, Acume Groups",
      testimony:
        "SALOYIN LIMITED is my go-to for all my general supplies. They have a great selection of products, and their customer service is excellent.",
    },
    {
      id: 2,
      name: "Jane Madueke",
      post: "CFO, JanMad Nig. Ltd.",
      testimony:
        "I've been using SALOYIN LIMITED for years, and I've always been happy with their products and services. They're a great company to work with.",
    },
  ];

  

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 8000,
    cssEase: "linear",
  };

  return (
    <section className="testimonies">
      <div className="container">
        <div className="row">
          <div className="testimonies-left">
            <img src={TestimoniesGuy} alt="" />
          </div>
          <div className="testimonies-right">
            <div className="testimonies-right-box">
              <Slider {...settings}>
                {data.map((d) => (
                  <article className="testimony-box" key={d.id}>
                    <div className="testimony">
                      <p>{d.testimony}</p>
                    </div>
                    <div className="person">
                      <h5>{d.name}</h5>
                      <p>{d.post}</p>
                    </div>
                  </article>
                ))}
              </Slider>
            </div>

            {/* <Slider {...settings}> */}
            {/* <article className="testimony-box">
              <div>
                <p>
                  SALOYIN LIMITED is my go-to for all my general supplies. They
                  have a great selection of products, and their customer service
                  is excellent.
                </p>
              </div>
              <div>
                <h5>John Adewale</h5>
                <p>CEO, Acume Groups</p>
              </div>
            </article>
            <div>
              <article>
                <p>
                  I&apos;ve been using SALOYIN LIMITED for years, and I&apos;ve
                  always been happy with their products and services.
                  They&apos;re a great company to work with.
                </p>
              </article>
              <article className="person">
                <h5>Jane Madueke</h5>
                <p>CFO, JanMad Nig. Ltd.</p>
              </article>
            </div> */}
            {/* </Slider> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonies;
