import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Payment() {
  window.scrollTo(0, 0);
  return (
    <div className="payment_body">
      <Header />
      <main className="payment_main row">
        <div className="payment_main__title">Ticket Detail</div>
        <div className="payment_main__payment">
          <div className="payment_main__payment-detail">Event</div>
          <div className="payment_main__payment-value">
            Sights & Sounds Exhibition
          </div>
        </div>
        <div className="payment_main__payment">
          <div className="payment_main__payment-detail">Ticket Section</div>
          <div className="payment_main__payment-value">VIP</div>
        </div>
        <div className="payment_main__payment">
          <div className="payment_main__payment-detail">Quantity</div>
          <div className="payment_main__payment-value">2</div>
        </div>
        <div className="payment_main__payment">
          <div className="payment_main__payment-detail">Total Payment</div>
          <div className="payment_main__payment-value">$70</div>
        </div>
        <div className="payment_main__button">Process to Payment</div>
      </main>
      <Footer />
    </div>
  );
}

export default Payment;
