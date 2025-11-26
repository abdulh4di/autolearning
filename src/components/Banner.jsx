import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Banner = () => {
  return (
    <section id="banner">
      <div className="container banner__container">
        <div className="banner__row">
          <div className="banner__contents" data-aos="fade-up" data-aos-duration="1000">
            <div className="banner__content">
              <FontAwesomeIcon icon={faPhone} className="banner__content__icon" />
              <a href="tel:07943227718" className="banner__content__no">
                07943227718
              </a>
            </div>
            <div className="banner__content">
              <FontAwesomeIcon icon={faEnvelope} className="banner__content__icon" />
              <a href="mailto:autolearnncl@gmail.com" className="banner__content__email">
                autolearnncl@gmail.com
              </a>
            </div>

            <a
              href="https://www.facebook.com/people/Auto-Learn-School-of-Motoring/61581538496415/"
              target="_blank"
              rel="noopener noreferrer"
              className="banner__social"
            >
              <FontAwesomeIcon icon={faFacebook} className="banner__content__icon" />
            </a>
            <a
              href="https://www.instagram.com/autolearn_ncl/"
              target="_blank"
              rel="noopener noreferrer"
              className="banner__social"
            >
              <FontAwesomeIcon icon={faInstagram} className="banner__content__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
