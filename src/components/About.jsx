import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="row about__row">
          <div className="about__left" data-aos="fade-right" data-aos-duration="1600">
            <p className="about__para">
              Auto Learn School of Motoring is run by a fully qualified{" "}
              <span className="about__para__span">Approved Driving Instructor (ADI)</span>, offering
              automatic driving lessons across Newcastle. We provide calm, structured, and
              confidence-building tuition to help learners drive safely and pass with confidence.
            </p>
            <div className="about__socials">
              <a
                href="https://www.facebook.com/people/Auto-Learn-School-of-Motoring/61581538496415/"
                target="_blank"
                rel="noopener noreferrer"
                className="about__social"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.instagram.com/autolearn_ncl/"
                target="_blank"
                rel="noopener noreferrer"
                className="about__social"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          <div className="about__right" data-aos="fade-left" data-aos-duration="1600">
            <ul className="about__highlights">
              <li className="about__highlight">
                ✓ <span className="about__hightlight__span">Step-by-step </span>
                lessons designed for complete beginners
              </li>
              <li className="about__highlight">
                ✓ <span className="about__hightlight__span">Tailored instruction </span>
                to suit your skill level and learning pace
              </li>
              <li className="about__highlight">
                ✓ <span className="about__hightlight__span">ADI-approved </span>
                with expert local knowledge
              </li>
              <li className="about__highlight">
                ✓ <span className="about__hightlight__span">Calm, supportive lessons </span>
                designed to help nervous drivers feel at ease
              </li>
              <li className="about__highlight">
                ✓ <span className="about__hightlight__span">Simulated driving tests </span>
                to help you feel ready and confident
              </li>
              <li className="about__highlight">
                ✓ <span className="about__hightlight__span">Dual-controlled cars </span>
                to ensure a safe learning experience
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
