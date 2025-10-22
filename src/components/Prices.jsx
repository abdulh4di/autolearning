import pricesData from "../components/data/PricesData.js";

const Prices = () => {
  return (
    <section id="prices">
      <div className="container">
        <div className="row prices__row">
          <div className="price-card1">
            <div className="price-card1-best">Best value</div>
            <h3 className="price-card__title">Block Booking</h3>
            <h4 className="price-card__subheading">Block of 10 hours: £380</h4>
            <p className="price-card__para">
              Save time and money with our convenient block booking
            </p>
            <a href="tel:07943227718" className="price-card__btn1">
              Get started now
            </a>
          </div>

          {pricesData.map((price) => {
            return (
              <div className="price-card" key={price.id}>
                <h3 className="price-card__title">{price.title}</h3>
                <h4 className="price-card__subheading">{price.price}</h4>
                <p className="price-card__para">{price.desciption}</p>
                <a href="tel:07943227718" className="price-card__btn">
                  Get started now
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Prices;
