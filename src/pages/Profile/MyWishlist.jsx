import { useEffect, useState } from "react";
import moment from "moment";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";
import { HeartFill } from "react-bootstrap-icons";

export default function Profile() {
  const [wishlist] = useState([
    {
      id: "945aac3c-6d91-4fba-b077-bba3538bf71b",
      event_id: {
        id: "95809473-4a77-494e-8d0f-90cad268cfe7",
        name: "JISPHORIA",
        date_time_show: "2022-10-13T05:00:00+00:00",
        location: {
          id: "42fb3705-7edb-4b01-95c3-1486360a9348",
          name: "Jakarta",
        },
      },
      user_id: {
        id: "368267ee-cd13-4ce1-823f-a1d19066acf5",
        name: "bill hikmah",
      },
      created_at: "2022-10-09T13:46:25.007898+00:00",
      updated_at: "2022-10-09T13:46:25.007898+00:00",
    },
    {
      id: "945aac3c-6d91-4fba-b077-bba3538bf71a",
      event_id: {
        id: "95809473-4a77-494e-8d0f-90cad268cfe7",
        name: "JISPHORIA",
        date_time_show: "2022-10-13T05:00:00+00:00",
        location: {
          id: "42fb3705-7edb-4b01-95c3-1486360a9348",
          name: "Jakarta",
        },
      },
      user_id: {
        id: "368267ee-cd13-4ce1-823f-a1d19066acf5",
        name: "bill hikmah",
      },
      created_at: "2022-10-09T13:46:25.007898+00:00",
      updated_at: "2022-10-09T13:46:25.007898+00:00",
    },
  ]);
  const [showDetail, setShowDetail] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {});
  const navigateHandler = (data) => {
    if (data === "close") {
      return setShowDetail(false);
    }
    navigate(`/detail/${data}`);
  };
  return (
    <div className="profile_right-side col-sm-6 col-md-8 col-lg-9">
      <div className="profile_right-side__title">My Wishlist</div>
      {wishlist.length === 0 ? (
        <div className="myWishlist__message-container">
          <div className="myWishlist__message">No event found</div>
          <div className="myWishlist__submessage">
            It appears you haven’t wish any events yet. <br />
            Maybe try searching these?
          </div>
        </div>
      ) : (
        <div className="myWishlist__container row">
          {wishlist.map((e) => {
            return (
              <div key={e.id} className="myWishlist__item col">
                <div className="myWishlist__date-container">
                  <div className="myWishlist__item-date">
                    {moment(e.date_time_show).format("DD")}
                  </div>
                  <div className="myWishlist__item-day">
                    {moment(e.date_time_show).format("ddd")}
                  </div>
                </div>
                <div className="myWishlist__event-container">
                  <div className="myWishlist__name">{e.event_id.name}</div>
                  <div className="myWishlist__location">
                    {e.event_id.location.name}
                  </div>
                  <div className="myWishlist__date">
                    {moment(e.event_id.date_time_show).format(
                      "ddd, DD MMM h:mm A"
                    )}
                  </div>
                </div>
                <div className="myWishlist__heart-container">
                  <HeartFill />
                </div>
              </div>
            );
          })}
        </div>
      )}
      <Modal
        showModal={showDetail}
        title={wishlist[0].event_id.name}
        navigateHandler={navigateHandler}
        whitePath="close"
        whiteButton="close"
        bluePath={wishlist[0].event_id.id}
        blueButton="View Event"
      />
    </div>
  );
}
