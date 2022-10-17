import { useEffect, useState } from "react";
import moment from "moment";
import Modal from "../../components/Modal";
import { HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistAction } from "../../redux/action/wishlist";
import axios from "../../utils/axios";

export default function Profile() {
  const wishlist = useSelector((state) => state.wishlist.data);
  const [showModal, setShowModal] = useState(false);
  const [wishlistActive, setWishlistActive] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWishlistAction());
  }, []);
  const navigateHandler = (data) => {
    if (data === "close") {
      return setShowModal(false);
    }
    deleteWishlist(data);
  };
  const wishlistHandler = (id) => {
    setWishlistActive(id);
    setShowModal(true);
  };
  const deleteWishlist = async (id) => {
    try {
      await axios.delete(`/api/wishlist/${id}`);
      dispatch(getWishlistAction());
      setShowModal(false);
    } catch (_) {
      setShowModal(false);
    }
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
                <div
                  className="myWishlist__heart-container"
                  onClick={() => {
                    wishlistHandler(e.id);
                  }}
                >
                  <HeartFill />
                </div>
              </div>
            );
          })}
        </div>
      )}

      <Modal
        navigateHandler={navigateHandler}
        showModal={showModal}
        title="Remove from Wishlist"
        message="Are you sure to remove this event from your wishlist?"
        blueButton="Yes"
        bluePath={`${wishlistActive}`}
        whiteButton="Cancel"
        whitePath="close"
      />
    </div>
  );
}
