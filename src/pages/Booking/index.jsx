import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

function Booking() {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const navigateHandler = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className="booking_body">
      <Header />
      <main className="booking_main row">
        <div className="col col-12 col-lg-6 booking_main__left-side">
          <img
            src={require("../../assets/Vectors/section-1.png")}
            alt="movie poster"
            className="booking_main__image"
          />
        </div>
        <div className="col col-12 col-lg-6 booking_main__right-side">
          <div className="row booking_main__title-container">
            <div className="col booking_main__title">Tickets</div>
            <div className="col booking_main__sort">
              BY PRICE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-arrow-down-up booking_main__sort-logo"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
            </div>
          </div>
          <div className="booking_main__section">
            <img
              src={require("../../assets/Vectors/section-logo-1.png")}
              alt="section logo"
              className="booking_main__section-image"
            />
            <div className="booking_main__section-detail-container">
              <div className="booking_main__section-detail">
                <div className="booking_main__section-title">
                  Section reg, Row 1
                </div>
                <div className="booking_main__section-price">$15</div>
              </div>
              <div className="booking_main__section-detail">
                <div className="booking_main__section-seat">
                  12 Seats available
                </div>
                <div className="booking_main__section-desc">per person</div>
              </div>
              <div className="booking_main__section-detail">
                <div className="booking_main__section-quantity">Quantity</div>
                <div className="booking_main__section-counter">
                  <div className="booking_main__value-counter">-</div>
                  <div className="booking_main__value">0</div>
                  <div className="booking_main__value-counter">+</div>
                </div>
              </div>
            </div>
          </div>
          <div className="booking_main__section">
            <img
              src={require("../../assets/Vectors/section-logo-2.png")}
              alt="section logo"
              className="booking_main__section-image"
            />
            <div className="booking_main__section-detail-container">
              <div className="booking_main__section-detail">
                <div className="booking_main__section-title">
                  Section vip, Row 2
                </div>
                <div className="booking_main__section-price">$35</div>
              </div>
              <div className="booking_main__section-detail">
                <div className="booking_main__section-seat">
                  9 Seats available
                </div>
                <div className="booking_main__section-desc">per person</div>
              </div>
              <div className="booking_main__section-detail">
                <div className="booking_main__section-quantity">Quantity</div>
                <div className="booking_main__section-counter">
                  <div className="booking_main__value-counter">-</div>
                  <div className="booking_main__value">0</div>
                  <div className="booking_main__value-counter">+</div>
                </div>
              </div>
            </div>
          </div>
          <div className="booking_main__section">
            <img
              src={require("../../assets/Vectors/section-logo-3.png")}
              alt="section logo"
              className="booking_main__section-image"
            />
            <div className="booking_main__section-detail-container">
              <div className="booking_main__section-detail">
                <div className="booking_main__section-title">
                  Section vvip, Row 3
                </div>
                <div className="booking_main__section-price">$50</div>
              </div>
              <div className="booking_main__section-detail">
                <div className="booking_main__section-seat">
                  6 Seats available
                </div>
                <div className="booking_main__section-desc">per person</div>
              </div>
              <div className="booking_main__section-detail">
                <div className="booking_main__section-quantity">Quantity</div>
                <div className="booking_main__section-counter">
                  <div className="booking_main__value-counter">-</div>
                  <div className="booking_main__value">0</div>
                  <div className="booking_main__value-counter">+</div>
                </div>
              </div>
            </div>
          </div>
          <div className="booking_main__booking">
            <div className="booking_main__booking-detail">Ticket Section</div>
            <div className="booking_main__booking-value">VIP</div>
          </div>
          <div className="booking_main__booking">
            <div className="booking_main__booking-detail">Quantity</div>
            <div className="booking_main__booking-value">2</div>
          </div>
          <div className="booking_main__booking">
            <div className="booking_main__booking-detail">Total Payment</div>
            <div className="booking_main__booking-value">$70</div>
          </div>
          <div
            className="booking_main__button"
            onClick={() => {
              navigateHandler("payment");
            }}
          >
            Checkout
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Booking;
