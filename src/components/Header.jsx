import React from "react";
import HeaderBg from "../assets/HeaderBg.jpg";

const Header = () => {
  return (
    <section id="header">
      <img src={HeaderBg} className="header__img" />
      <div className="header__contents">
        <h1 className="header__title">
          Start Your Driving <br />
          Journey with<span className="header__title__span"> Confidence!</span>
        </h1>
        <div className="header__para" >
          Take the easy route to driving freedom with Auto Learn School of Motoring. We offer
          automatic lessons designed for beginners who want a smoother, more relaxed experience
          behind the wheel — helping you gain confidence and pass your test with ease.
        </div>
        <a href="tel:07943227718" className="header__btn" >
          Call now
        </a>
      </div>
    </section>
  );
};

export default Header;
