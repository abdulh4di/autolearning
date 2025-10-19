import NCL from "../assets/ncl.png";
import Gateshead from "../assets/gateshead.png";

const Coverage = () => {
  return (
    <section id="coverages">
      <div className="container coverage__container">
        <div className="row coverage__row">
          <div className="coverage">
            <div className="coverage__info">
              <h2 className="coverage__info-title">Newcastle upon Tyne</h2>
              <p className="coverage__info-para">
                Covering Newcastle and nearby areas, Auto Learn School of Motoring helps new drivers
                learn safely and confidently on real local roads. Our lessons are tailored to you,
                with a focus on building the skills you’ll need to pass your test and enjoy the
                freedom of driving.
              </p>
            </div>
            <div className="coverage__img-wrapper">
              <img src={NCL} alt="" className="coverage__img" />
            </div>
          </div>
          <div className="coverage">
            <div className="coverage__img-wrapper">
              <img src={Gateshead} alt="" className="coverage__img" />
            </div>
            <div className="coverage__info">
              <h2 className="coverage__info-title">Gateshead</h2>
              <p className="coverage__info-para">
                Covering Gateshead and nearby areas, Auto Learn School of Motoring is dedicated to
                helping new drivers succeed. Our automatic-only lessons are designed to make
                learning smooth, enjoyable, and focused on building real confidence behind the
                wheel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
