import "./contact.css";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import TitleBar from "../../layout/components/titleBar/TitleBar";
import ContactBg from "../../assets/contact-bg.jpg";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <Header />
      <TitleBar title="Contact Us" titleBg={ContactBg} />
      <div className="contact">
        <div className="container">
          <h4 className="subtitle">CONTACT US</h4>
          <h2 className="title">Let&apos;s Connect</h2>
          <p>
            We&apos;re committed to providing excellent service, and your
            inquiry is important to us.
          </p>
          <div className="contact-box">
            <div className="contact-box-left">
              <h3>Send Us A Message</h3>
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="from_name"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="from_email"
                />
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  name="phone"
                />
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Your message"
                ></textarea>
                <button type="submit" value="Send" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="contact-box-right">
              <h3>Locate Us</h3>
              <div className="contact-info">
                <article>
                  <i className="fa-solid fa-phone-volume"></i>
                  <p>
                    +234 803 344 6377, <br /> +234 807 213 133
                  </p>
                </article>
                <article>
                  <i className="fa-solid fa-envelope"></i>
                  <p>info@saloyin.com.ng</p>
                </article>
                <article>
                  <i className="fa-solid fa-location-dot"></i>
                  <p>37, Layi-Oyekanmi Street, Mushin, Lagos, Nigeria</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
