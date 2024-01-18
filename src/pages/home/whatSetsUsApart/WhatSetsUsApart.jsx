import './WhatSetsUsApart.css';
import Fact1 from '../../../assets/fact-1.jpg';
import Fact2 from '../../../assets/fact-2.jpg';

function WhatSetsUsApart() {
  return (
    <section className="what-sets-us-apart">
      <div className="container">
        <div className="row">
          <div className="wsua-left">
            <h4>What Sets Us Apart</h4>
            <ul className="facts">
              <li className="fact">
                <h2>Seasoned Experts</h2>
                <p>
                  Our team comprises industry veterans and forward-thinkers,
                  bringing a wealth of diverse experiences to the table.
                </p>
              </li>
              <li className="fact">
                <h2>Innovation Focus</h2>
                <p>
                  We embrace innovation and cutting-edge methodologies to stay
                  ahead of industry trends, delivering solutions that position
                  our clients as leaders in their fields.
                </p>
              </li>
              <li className="fact">
                <h2>Global Perspective</h2>
                <p>
                  Operating in a global landscape, we bring a comprehensive
                  perspective, leveraging cultural insights and diverse market
                  knowledge.
                </p>
              </li>
            </ul>
          </div>
          <div className="wsua-right">
            <div className="fact-pic-1">
              <img src={Fact1} alt="" />
            </div>
            <div className="fact-pic-2">
              <img src={Fact2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatSetsUsApart