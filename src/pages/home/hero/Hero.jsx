import './hero.css';
import HalfMoon from '../../../assets/half-moon.png';
import Window from '../../../assets/window.png';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-area">
          <div className="hero-area-left">
            <h1>
              Unlock Your&nbsp;
              <span>
                Business&lsquo;s <br />
                Potential
              </span>
              &nbsp;with Our <br />
              Expert Solutions
            </h1>
            <p>
              Business consulting company that leverage the use of a modern and
              up-to-date approach to convert your goal into reality.
            </p>
            <button className="btn btn-secondary">
              Get Started <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="hero-area-right">
            <div className="floating-window">
              <img src={Window} alt="Floating window" />
            </div>
            <div className="half-moon">
              <img src={HalfMoon} alt="A young man on device" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero