import "./computerTraining.css";
import TitleBar from "../../../layout/components/titleBar/TitleBar";
import Footer from "../../../layout/footer/Footer";
import Header from "../../../layout/header/Header";
import ServicesBg from "../../../assets/services-bg.jpg";
import ServicesSideMenu from "../../../layout/components/servicesSideMenu/ServicesSideMenu";
import CompTraining from "../../../assets/comp-training.jpg"
import CompRepair from "../../../assets/comp-repair.jpg"

function ComputerTraining() {
  return (
    <div>
      <Header />
      <TitleBar
        title="Computer Software & Hardware Training"
        titleBg={ServicesBg}
      />
      <div className="comp-training">
        <div className="container">
          <div className="row">
            <div className="side-menu">
              <ServicesSideMenu />
            </div>
            <main>
              <div className="comp-training-img">
                <div className="comp-training-img1">
                  <img src={CompRepair} alt="CAC logo" />
                </div>
                <div className="comp-training-img2">
                  <img
                    src={CompTraining}
                    alt="Young business man on phone and writing"
                  />
                </div>
              </div>
              <div className="contents">
                <p>
                  In today&apos;s digital world, it&apos;s more important than
                  ever to have the skills to use computers and technology
                  effectively. Whether you&apos;re looking to advance your
                  career, start your own business, or simply stay up-to-date on
                  the latest trends, computer software and hardware training can
                  help you reach your goals.
                </p>
                <p>
                  At SALOYIN LIMITED, we offer a wide range of computer software
                  and hardware training courses to meet your specific needs. Our
                  courses are designed to be both informative and practical, so
                  you&apos;ll learn the skills you need to use computers and
                  technology confidently and effectively.
                </p>
                <h4>We offer courses on a variety of topics, including:</h4>
                <ul className="list">
                  <li className="list-items">
                    Computer software: We offer courses on a variety of popular
                    software programs, such as Microsoft Office, Adobe
                    Photoshop, and AutoCAD.
                  </li>
                  <li className="list-items">
                    Computer hardware: We offer courses on the basics of
                    computer hardware, as well as more advanced topics such as
                    networking and system administration.
                  </li>
                  <li className="list-items">
                    Digital literacy: We offer courses on topics such as
                    internet safety, social media marketing, and online
                    communication.
                  </li>
                </ul>
                <p>
                  Our courses are taught by experienced and knowledgeable
                  instructors who are passionate about teaching. We offer both
                  online and in-person training, so you can find the format that
                  best suits your needs.
                </p>
                <p>
                  If you&apos;re looking to improve your computer skills, look
                  no further than SALOYIN LIMITED! We offer the training you
                  need to succeed in today&apos;s digital world.
                </p>
                <h4>Benefits Of Training With Saloyin System : </h4>
                <ul className="list">
                  <li className="list-items">
                    Learn the skills you need to use computers and technology
                    effectively: Our courses will teach you the skills you need
                    to use computers and technology confidently and effectively.
                  </li>
                  <li className="list-items">
                    Stay up-to-date on the latest trends: Our courses are
                    constantly updated to reflect the latest trends in computer
                    software and hardware.
                  </li>
                  <li className="list-items">
                    Improve your job prospects: Computer skills are in high
                    demand, so improving your computer skills can help you
                    improve your job prospects.
                  </li>
                  <li className="list-items">
                    Start your own business: If you&apos;re thinking about
                    starting your own business, computer skills are essential.
                    Our courses can teach you the skills you need to start and
                    run a successful business.
                  </li>
                  <li className="list-items">
                    Thrive in today&apos;s digital world: In today&apos;s
                    digital world, computer skills are essential for success.
                    Our courses can help you thrive in today&apos;s digital
                    world.
                  </li>
                </ul>
                <h4>Conclusion:</h4>
                <p>
                  If you&apos;re looking to improve your computer skills, look no
                  further than SALOYIN LIMITED! Our courses are designed to be
                  both informative and practical, so you&apos;ll learn the skills you
                  need to use computers and technology confidently and
                  effectively. Contact us today to learn more.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ComputerTraining;
