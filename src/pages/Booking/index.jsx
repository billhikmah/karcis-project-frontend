import "./index.css";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Seat from "../../components/Seat";

import ticketREG from "../../assets/Vectors/section-logo-1.png";
import ticketVIP from "../../assets/Vectors/section-logo-2.png";
import ticketVVIP from "../../assets/Vectors/section-logo-3.png";
import { useNavigate, useParams } from "react-router-dom";

function Booking() {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const [fullSeat, setFullSeat] = useState([]); // DI GUNAKAN UNTUK MENAMPUNG SEAT YANG FULL
  const [activeSeat, setActiveSeat] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SEDANG DIPILIH
  const [dataOrder, setDataOrder] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SUDAH TERPILIH
  const [listBooking, setListBooking] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG LIST DATA SEAT YANG SUDAH DI BOOKING
  const [dataEvent, setDataEvent] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG DATA EVENT
  const [section, setSection] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    getDataBooking();
    getDataEvent();
  }, []);

  useEffect(() => {
    const section = dataOrder.map((item) => item.seat);
    const activeSection = [];
    section.map((item) => {
      if (item.includes("VVIP")) {
        if (!activeSection.includes("VVIP")) {
          activeSection.push("VVIP");
        }
      }
      if (item.includes("VIP")) {
        if (!activeSection.includes("VIP")) {
          activeSection.push("VIP");
        }
      }
      if (item.includes("REG")) {
        if (!activeSection.includes("REG")) {
          activeSection.push("REG");
        }
      }
    });
    setSection(activeSection);

    const price = dataOrder.map((item) => item.price);
    let totalPrice = 0;
    setTotalPayment(0);
    price.map((item) => {
      totalPrice = totalPrice + item;
    });
    setTotalPayment(totalPrice);

    const quantity = dataOrder.map((item) => item.qty);
    let totalTicket = 0;
    setQuantity(0);
    quantity.map((item) => {
      totalTicket = totalTicket + item;
    });
    setQuantity(totalTicket);
  }, [dataOrder]);

  const getDataBooking = async () => {
    try {
      const result = await axios.get(`api/booking/section/${id}`);
      let dataFullSeat = result.data.data.filter((item) => item.statusFull);
      dataFullSeat = dataFullSeat.map((item) => item.section);
      setFullSeat(dataFullSeat);
      setListBooking(result.data.data);
    } catch (_) {
      _;
    }
  };
  const getDataEvent = async () => {
    try {
      const result = await axios.get(`/api/event/${id}`);
      setDataEvent(result.data.data);
    } catch (_) {
      _;
    }
  };

  const handleSelectSeat = (seat) => {
    // PROSES PEMILIHAN SEAT
    const data = seat.split("-");
    if (!fullSeat.includes(seat)) {
      if (activeSeat.includes(seat)) {
        const deleteSeat = activeSeat.filter((item) => item !== seat);
        const deleteDataOrder = dataOrder.filter((item) => item.seat !== seat);
        setActiveSeat(deleteSeat);
        setDataOrder(deleteDataOrder);
      } else {
        setActiveSeat([...activeSeat, seat]);
        setDataOrder([
          ...dataOrder,
          {
            seat,
            qty: 1,
            price: data[0].includes("VVIP")
              ? dataEvent[0].price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
              : data[0].includes("VIP")
              ? dataEvent[0].price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
              : dataEvent[0].price, // HARGA TIDAK BERUBAH UNTUK REGULAR
          },
        ]);
      }
    }
  };
  const increaseOrderSeat = (section) => {
    const findData = dataOrder.find((item) => item.seat === section.seat);
    const price = section.seat.includes("VVIP")
      ? dataEvent[0].price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
      : section.seat.includes("VIP")
      ? dataEvent[0].price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
      : dataEvent[0].price; // HARGA TIDAK BERUBAH UNTUK REGULAR
    findData.qty += 1;
    findData.price = price * findData.qty;
    setDataOrder([...dataOrder]);
  };
  const decreaseOrderSeat = (section) => {
    const findData = dataOrder.find((item) => item.seat === section.seat);
    if (findData.qty === 1) {
      const deleteData = dataOrder.filter((item) => item.seat !== section.seat);
      const deleteSeat = activeSeat.filter((item) => item !== section.seat);
      setDataOrder(deleteData);
      setActiveSeat(deleteSeat);
    } else {
      const price = section.seat.includes("VVIP")
        ? dataEvent[0].price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
        : section.seat.includes("VIP")
        ? dataEvent[0].price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
        : dataEvent[0].price; // HARGA TIDAK BERUBAH UNTUK REGULAR
      findData.qty -= 1;
      findData.price = price * findData.qty;
      setDataOrder([...dataOrder]);
    }
  };
  const handleOrderSeat = () => {
    navigate("/payment", {
      state: {
        id,
        dataOrder,
        event: dataEvent[0].name,
        section,
        quantity,
        totalPayment,
      },
    });
    // console.log(dataOrder);
  };
  const clearOrderSeat = () => {
    setActiveSeat([]);
    setDataOrder([]);
  };

  return (
    <div className="booking_body">
      <Header />
      <main className="booking_main row">
        <div className="col-12 col-lg-6 booking_main__left-side booking_main__rotate-seat">
          <Seat
            width="90%" // MEMBERIKAN BESARAN PADA POLA SEAT
            height="90%" // MEMBERIKAN TINGGI PADA POLA SEAT
            fullSeat={fullSeat}
            activeSeat={activeSeat}
            handleSelectSeat={handleSelectSeat}
          />
        </div>
        <div className="col-12 col-lg-6 booking_main__right-side">
          <div className="row booking_main__title-container">
            <div className="col booking_main__title">Tickets</div>
          </div>

          {activeSeat.length > 0 ? (
            <div className="booking_main__ticket-scrolling">
              {dataOrder.map((item, index) => {
                const data = item.seat.split("-");
                const dataSeat = listBooking.filter(
                  (itemSeat) => itemSeat.section === item.seat
                );
                return (
                  <div key={index} className="booking_main__section">
                    <img
                      src={
                        data[0].includes("VVIP")
                          ? ticketVVIP
                          : data[0].includes("VIP")
                          ? ticketVIP
                          : ticketREG
                      }
                      className="booking_main__section-image ticket-icon"
                      alt="section logo"
                    />
                    <div className="row booking_main__section-detail-container">
                      <div className="booking_main__section-detail">
                        <div className="booking_main__section-title">
                          Section {data[0]}, Row {data[1]}
                        </div>
                        <div className="booking_main__section-price">
                          Rp{item.price}
                        </div>
                      </div>
                      <div className="booking_main__section-detail">
                        <div className="booking_main__section-seat">
                          {dataSeat.length > 0
                            ? dataSeat[0].available
                            : data[0].includes("VVIP")
                            ? 10
                            : data[0].includes("VIP")
                            ? 20
                            : 30}{" "}
                          Seats available
                        </div>
                        <div className="booking_main__section-desc"></div>
                      </div>
                      <div className="booking_main__section-detail">
                        <div className="booking_main__section-quantity">
                          Quantity
                        </div>
                        <div className="booking_main__section-counter">
                          <div
                            className="booking_main__value-counter"
                            onClick={() => decreaseOrderSeat(item)}
                          >
                            -
                          </div>
                          <div className="booking_main__value">{item.qty}</div>
                          <div
                            className="booking_main__value-counter"
                            onClick={() => increaseOrderSeat(item)}
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="booking_main__section-empty ">
              <h6 className="">Please select your seat</h6>
            </div>
          )}

          <div className="booking_main__booking">
            <div className="booking_main__booking-detail">Ticket Section</div>
            <div className="booking_main__booking-value">
              {section.map((item, index) => {
                if (index === section.length - 1) {
                  return item;
                }
                return `${item}, `;
              })}
            </div>
          </div>
          <div className="booking_main__booking">
            <div className="booking_main__booking-detail">Quantity</div>
            <div className="booking_main__booking-value">{quantity}</div>
          </div>
          <div className="booking_main__booking">
            <div className="booking_main__booking-detail">Total Payment</div>
            <div className="booking_main__booking-value">Rp{totalPayment}</div>
          </div>
          <div className="booking_main__button-container">
            <div className="booking_main__button" onClick={handleOrderSeat}>
              Checkout
            </div>
            <div
              className="booking_main__button-clear"
              onClick={clearOrderSeat}
            >
              Clear All
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Booking;
