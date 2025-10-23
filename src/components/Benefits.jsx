import { faClock, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faHandshakeAngle, faSterlingSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Benefits = () => {
  return (
    <>
      <section className="benefits">
        <div className="container benefits__container">
          <div className="row benefits__row">
            <div className="benefits__top">
              <h1 className="benefits__title" data-aos="fade-up" data-aos-duration="1200">
                Professional driving instruction <br /> you can trust
              </h1>
              <h2 className="benefits__subheading" data-aos="fade-up" data-aos-duration="1600">
                We deliver comprehensive trading that goes beyond basic driving techniques. <br />
                Our approach ensures you can become a safe and skilled driver
              </h2>
            </div>
            <div className="benefits__bottom">
              <div className="benefits__blocks">
                <div
                  className="benefits__block"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <FontAwesomeIcon icon={faSquareCheck} className="benefits__block-icon" />
                  <h2 className="benefits__block-title">Certified Instructor</h2>
                  <div className="benefits__block__para">
                    Learn with a fully certified DVSA Approved Driving Instructor committed to your
                    success - dedicated to helping you master new skills, and achieve your goals.
                  </div>
                </div>
                <div
                  className="benefits__block"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <FontAwesomeIcon icon={faHandshakeAngle} className="benefits__block-icon" />
                  <h2 className="benefits__block-title">Reliable Lessons</h2>
                  <div className="benefits__block__para">
                    Count on consistent, punctual driving lessons you can trust. We ensure every
                    session starts on time and delivers the dependable training experience.
                  </div>
                </div>
                <div
                  className="benefits__block"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <FontAwesomeIcon icon={faSterlingSign} className="benefits__block-icon" />
                  <h2 className="benefits__block-title">Affordable Price</h2>
                  <div className="benefits__block__para">
                    Enjoy competitive rates and complete transparency with our pricing. What you see
                    is what you pay — no hidden fees, no surprises.
                  </div>
                </div>
              </div>
              <span className="benefits__bottom-btn__wrapper"     data-aos="fade-up"
                data-aos-duration="1800">
                <a href="tel:07943227718" className="benefits__bottom-btn">
                  Get in touch now
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
