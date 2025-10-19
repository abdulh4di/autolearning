import { faClock, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faSterlingSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Benefits = () => {
  return (
    <>
      <section className="benefits">
        <div className="container benefits__container">
          <div className="row benefits__row">
            <div className="benefits__top">
              <h1 className="benefits__title">
                Professional driving instruction <br /> you can trust
              </h1>
              <h2 className="benefits__subheading">
                We deliver comprehensive trading that goes beyond basic driving techniques. <br />
                Our approach ensures you can become a safe and skilled drover
              </h2>
            </div>
            <div className="benefits__bottom">
              <div className="benefits__blocks">
                <div className="benefits__block">
                  <FontAwesomeIcon icon={faSquareCheck} className="benefits__block-icon" />
                  <h2 className="benefits__block-title">Certified Instructor</h2>
                  <div className="benefits__block__para">
                    Learn with a fully certified DVSA Approved Driving Instructor committed to your
                    success - dedicated to helping you master new skills, and achieve your goals.
                  </div>
                </div>
                <div className="benefits__block">
                  <FontAwesomeIcon icon={faClock} className="benefits__block-icon" />
                  <h2 className="benefits__block-title">Flexible Schedules</h2>
                  <div className="benefits__block__para">
                    Enjoy flexible scheduling that works around your availability — we make it
                    simple to fit your sessions into your busy routine.
                  </div>
                </div>
                <div className="benefits__block">
                  <FontAwesomeIcon icon={faSterlingSign} className="benefits__block-icon" />
                  <h2 className="benefits__block-title">Affordable Price</h2>
                  <div className="benefits__block__para">
                    Enjoy competitive rates and complete transparency with our pricing. What you see
                    is what you pay — no hidden fees, no surprises.
                  </div>
                </div>
              </div>
              <span className="benefits__bottom-btn__wrapper">
                <a href="tel:07943227718"  className="benefits__bottom-btn">
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
