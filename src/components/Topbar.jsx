import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Topbar = () => {
  return (
    <div id="topbar">
      <div className="topbar__info">
        <div className="topbar__contact-detail">
          <FontAwesomeIcon icon={faPhone} className="topbar__contact-detail__icon" />
          <a href="tel:07943227718" className="topbar__contact-detail__no">
            07943227718
          </a>
        </div>
        <div className="topbar__contact-detail">
          <FontAwesomeIcon icon={faEnvelope} className="topbar__contact-detail__icon" />
          <a href="mailto:autolearnncl@gmail.com" className="topbar__contact-detail__email">
            autolearnncl@gmail.com
          </a>
        </div>
        <div className="topbar__socials">
          <a
            href="https://www.facebook.com/people/Auto-Learn-School-of-Motoring/61581538496415/"
            target="_blank"
            rel="noopener noreferrer"
            className="topbar__social"
          >
            <FontAwesomeIcon icon={faFacebook} className="topbar__socials-icon" />
          </a>
          <a
            href="https://www.instagram.com/autolearn_ncl/"
            target="_blank"
            rel="noopener noreferrer"
             className="topbar__social"
          >
            <FontAwesomeIcon icon={faInstagram} className="topbar__socials-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
