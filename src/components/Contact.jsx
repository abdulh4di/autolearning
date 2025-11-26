import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      e.target.reset();
      toast.success("Form submitted successfully!", {
        style: {
          backgroundColour: "rgba(0, 0, 0, 0.987)",
          boxShadow: "0 2px 4px 2px rgba(236, 229, 229, 0.2)",
          color: "#fff",
          borderRadius: "4px",
        },
      });
    } else {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="row contact__row">
          <div className="contact__top">
            <h1 className="contact__top__title" data-aos="fade-up" data-aos-duration="1000">
              Get in touch
            </h1>
            <p className="contact__top__para" data-aos="fade-up" data-aos-duration="1050">
              Have a question or want to book a lesson? Contact Auto Learn School of Motoring today
              to find out more about our automatic driving lessons and availability.
            </p>
          </div>
          <div className="contact__bottom">
            <div className="contact__form" data-aos="fade-right" data-aos-duration="1200">
              <form onSubmit={onSubmit}>
                <input
                  type="hidden"
                  name="access_key"
                  value="c6f9dc4e-2831-493d-a853-eed4b33948f6"
                />
                <div className="contact__form-input">
                  <div className="input__box">
                    <label>Name</label>
                    <input
                      placeholder="Enter name"
                      type="text"
                      name="name"
                      className="input__box-field"
                      required
                    />
                  </div>
                  <div className="input__box">
                    <label>Email</label>
                    <input
                      placeholder="Enter email"
                      type="email"
                      name="email"
                      className="input__box-field"
                      required
                    />
                  </div>
                  <div className="input__box">
                    <label>Mobile/Telephone</label>
                    <input
                      placeholder="Enter number"
                      type="tel"
                      name="Telephone"
                      className="input__box-field"
                      required
                    />
                  </div>
                  <div className="input__box">
                    <label>Message</label>
                    <textarea
                      placeholder="Enter your message"
                      name="message"
                      className="input__box__message"
                      required
                    ></textarea>
                  </div>
                </div>
                <span className="contact-form__btn__wrapper">
                  <button className="contact-form__btn" type="submit">
                    Submit
                  </button>
                </span>
              </form>
            </div>
            <div className="contact__info" data-aos="fade-left" data-aos-duration="1200">
              <div className="contact-top">
                <div className="contact-top-details">
                  <h2 className="contact-top-details-title">Contact Us</h2>
                  <div className="contact-top-detail">
                    <FontAwesomeIcon icon={faPhone} className="contact-top-detail-icon" />
                    <a href="tel:07943227718" className="contact-top-detail-item">
                      07943227718
                    </a>
                  </div>
                  <div className="contact-top-detail">
                    <FontAwesomeIcon icon={faEnvelope} className="contact-top-detail-icon" />
                    <a href="mailto:autolearnncl@gmail.com" className="contact-top-detail-item">
                      autolearnncl@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-top-socials">
                  <h2 className="contact-top-socials-title">Follow Us</h2>
                  <div className="contact-top-socials-items">
                    <a
                      href="https://www.facebook.com/people/Auto-Learn-School-of-Motoring/61581538496415/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-top-social"
                    >
                      <FontAwesomeIcon icon={faFacebook} className="contact-top-social-icon" />
                    </a>
                    <a
                      href="https://www.instagram.com/autolearn_ncl/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} className="contact-top-social-icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-bottom">
                <div className="contact-bottom-title">Opening Hours</div>
                <div className="contact-bottom-times">
                  <ul className="contact-bottom-opening-times">
                    <li className="contact-bottom-opening-time">
                      Monday: <span className="openeing-time">9:00 - 17:00</span>
                    </li>
                    <li className="contact-bottom-opening-time">
                      Tuesday: <span className="openeing-time">9:00 - 17:00</span>
                    </li>
                    <li className="contact-bottom-opening-time">
                      Wednesday: <span className="openeing-time">9:00 - 17:00</span>
                    </li>
                    <li className="contact-bottom-opening-time">
                      Thursday: <span className="openeing-time">9:00 - 17:00</span>
                    </li>
                    <li className="contact-bottom-opening-time">
                      Friday: <span className="openeing-time">9:00 - 17:00</span>
                    </li>
                  </ul>
                  <ul className="contact-bottom-closing-times">
                    <li className="contact-bottom-closing-time">
                      Saturday: <span className="closing-time">Closed</span>
                    </li>
                    <li className="contact-bottom-closing-time">
                      Sunday: <span className="closing-time">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
