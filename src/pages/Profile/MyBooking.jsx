import { useEffect, useState } from "react";
import moment from "moment";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBookingAction } from "../../redux/action/booking";

export default function Profile() {
  const booking = useSelector((state) => state.booking.data);
  const [showDetail, setShowDetail] = useState(false);
  const [eventIndex, setEventIndex] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookingAction());
  }, []);

  const detailHandler = (index) => {
    setEventIndex(index);
    setShowDetail(true);
  };
  const navigateHandler = (data) => {
    if (data === "close") {
      return setShowDetail(false);
    }
    navigate(`/detail/${data}`);
  };
  return (
    <div className="profile_right-side col-sm-6 col-md-8 col-lg-9">
      <div className="profile_right-side__title">My Booking</div>
      {booking.length === 0 ? (
        <div className="myBooking__message-container">
          <div className="myBooking__message">No tickets bought</div>
          <div className="myBooking__submessage">
            It appears you haven’t bought any tickets yet. <br />
            Maybe try searching these?
          </div>
        </div>
      ) : (
        <div className="myBooking__container row">
          {booking.map((e, index) => {
            return (
              <div key={e.id} className="myBooking__item col">
                <div className="myBooking__date-container">
                  <div className="myBooking__item-date">
                    {moment(e.date_time_show).format("DD")}
                  </div>
                  <div className="myBooking__item-day">
                    {moment(e.date_time_show).format("ddd")}
                  </div>
                </div>
                <div className="myBooking__event-container">
                  <div className="myBooking__name">{e.event_id.name}</div>
                  <div className="myBooking__location">
                    {e.event_id.location.name}
                  </div>
                  <div className="myBooking__date">
                    {moment(e.event_id.date_time_show).format(
                      "ddd, DD MMM h:mm A"
                    )}
                  </div>
                  <div
                    className="myBooking__detail"
                    onClick={() => {
                      detailHandler(index);
                    }}
                  >
                    Detail
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <Modal
        showModal={showDetail}
        title={booking.length !== 0 ? booking[eventIndex].event_id.name : ""}
        navigateHandler={navigateHandler}
        whitePath="close"
        whiteButton="close"
        bluePath={booking.length !== 0 ? booking[eventIndex].event_id.id : ""}
        blueButton="View Event"
        message={
          <div className="myBooking__modal-container">
            <div className="myBooking__modal-message">
              <div className="myBooking__modal-key">Location</div>
              <div>
                :{" "}
                {booking.length !== 0
                  ? booking[eventIndex].event_id.location.name
                  : ""}
              </div>
            </div>
            <div className="myBooking__modal-message">
              <div className="myBooking__modal-key">Date</div>
              <div>
                :{" "}
                {booking.length !== 0
                  ? booking[eventIndex].event_id.date_time_show
                  : ""}
              </div>
            </div>
            <div className="myBooking__modal-message">
              <div className="myBooking__modal-key">Total Ticket</div>
              <div>
                : {booking.length !== 0 ? booking[eventIndex].total_ticket : ""}
              </div>
            </div>
            <div className="myBooking__modal-message">
              <div className="myBooking__modal-key">Total Payment</div>
              <div>
                :{" "}
                {booking.length !== 0 ? booking[eventIndex].total_payment : ""}
              </div>
            </div>
            <div className="myBooking__modal-message">
              <div className="myBooking__modal-key">Section</div>
              <div>:</div>
            </div>
            <div className="myBooking__modal-message">
              <div className="myBooking__modal-section">
                {booking.length !== 0
                  ? booking[eventIndex].booking_section.map((e, index) => {
                      if (
                        index ===
                        booking[eventIndex].booking_section.length - 1
                      ) {
                        return <div key={index}>{e.section}.</div>;
                      }
                      return <div key={index}>{e.section},&nbsp;</div>;
                    })
                  : ""}
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}
