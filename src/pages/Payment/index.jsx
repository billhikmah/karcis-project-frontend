import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

function Payment() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const paymentHandler = async () => {
    try {
      const section = state.dataOrder.map((item) => item.seat);
      const body = {
        event_id: state.id,
        total_payment: state.totalPayment,
        payment_method: "c1e6455e-96e5-4284-8fc4-921273061752",
        payment_status: "success",
        section,
      };
      const result = await axios.post(`/api/booking/`, body);
      if (result) {
        navigate("/");
      }
    } catch (_) {
      _;
    }
  };
  window.scrollTo(0, 0);
  return (
    <div className="payment_body">
      <Header />
      <main className="payment_main row">
        <div className="payment_main__title">Ticket Detail</div>
        <div className="payment_main__payment">
          <div className="payment_main__payment-detail">Event</div>
          <div className="payment_main__payment-value">{state.event}</div>
        </div>
        <div className="payment_main__payment">
          <div className="payment_main__payment-detail">Ticket Section</div>
          <div className="payment_main__payment-value">
            {state.section.map((item, index) => {
              if (index === state.section.length - 1) {
                return item;
              }
              return `${item}, `;
            })}
          </div>
        </div>
        <div className="payment_main__payment">
          <div className="payment_main__payment-detail">Quantity</div>
          <div className="payment_main__payment-value">{state.quantity}</div>
        </div>
        <div className="payment_main__payment">
          <div className="payment_main__payment-detail">Total Payment</div>
          <div className="payment_main__payment-value">
            Rp {state.totalPayment}
          </div>
        </div>
        <div className="payment_main__button" onClick={paymentHandler}>
          Process to Payment
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Payment;
