import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { Heart, HeartFill, GeoAlt, Clock } from "react-bootstrap-icons";
import moment from "moment";

function index() {
  const [event, setEvent] = useState();
  const [addToWishlist, setAddToWishlist] = useState(true);
  const [wishlistId, setWishlistId] = useState("");
  const [halfDetail, setHalfDetail] = useState("");
  const [readMore, setReadMore] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const navigateHandler = (path) => {
    navigate(`/${path}`);
  };

  useEffect(() => {
    getEventById();
    if (token) {
      getWishlistById();
    }
    window.scrollTo(0, 0);
  }, []);

  const getEventById = async () => {
    try {
      const result = await axios.get(`/api/event/${id}`);
      setEvent(result.data.data[0]);
      setHalfDetail(result.data.data[0].detail.slice(0, 50));
    } catch (_) {
      _;
    }
  };
  const getWishlistById = async () => {
    try {
      const result = await axios.get(`/api/wishlist/${id}`);
      if (result.data.data.length > 0) {
        setAddToWishlist(false);
        setWishlistId(result.data.data[0].id);
      }
    } catch (_) {
      // empty
    }
  };
  const createWishlist = async () => {
    try {
      const body = { event_id: id };
      const result = await axios.post(`/api/wishlist/`, body);
      setWishlistId(result.data.data[0].id);
      setAddToWishlist(false);
    } catch (_) {
      setAddToWishlist(true);
    }
  };
  const deleteWishlist = async () => {
    try {
      await axios.delete(`/api/wishlist/${wishlistId}`, {
        body: { event_id: id },
      });
      setAddToWishlist(true);
    } catch (_) {
      setAddToWishlist(false);
    }
  };

  const wishlistHandler = async () => {
    if (addToWishlist) {
      createWishlist();
    }
    if (!addToWishlist) {
      deleteWishlist();
    }
  };

  return (
    <div className="detail_body">
      <Header />
      <main className="detail_main row">
        <div className="col col-12 col-lg-6 detail_main__left-side">
          <div className="detail_main__image-container">
            <img
              src={
                event
                  ? `https://res.cloudinary.com/starbillscloud/image/upload/v1663094115/${event.image} `
                  : require("../../assets/Images/picture-7.jpg")
              }
              alt="movie poster"
              className="detail_main__image"
            />
          </div>
          {token ? (
            !addToWishlist ? (
              <div className="detail_main__add-wishlist">
                <HeartFill
                  className="detail_main__add-wishlist-logo"
                  onClick={wishlistHandler}
                />
                <span
                  className="detail_main__add-wishlist-text"
                  onClick={wishlistHandler}
                >
                  Remove from Wishlist
                </span>
              </div>
            ) : (
              <div className="detail_main__add-wishlist">
                <Heart onClick={wishlistHandler} />
                <span
                  className="detail_main__add-wishlist-text"
                  onClick={wishlistHandler}
                >
                  Add to Wishlist
                </span>
              </div>
            )
          ) : (
            <></>
          )}
        </div>
        <div className="col col-12 col-lg-6 detail_main__right-side">
          <div className="col detail_main__title">
            {event ? event.name : <div> &nbsp;</div>}
          </div>
          <div className="row detail_main__icon-detail-container">
            <div className="col detail_main__icon-detail">
              <GeoAlt className="bi bi-geo-alt detail_main__icon" />
              {event ? `${event.location.name}, Indonesia` : <div> &nbsp;</div>}
            </div>
            <div className="col detail_main__icon-detail">
              <Clock className="bi bi-clock detail_main__icon" />
              {event ? (
                moment(event.date_time_show).format("ddd, DD MMM h:mm A")
              ) : (
                <div> &nbsp;</div>
              )}
            </div>
          </div>
          <div className="col detail_main__attendees">Attendees</div>
          <div className="col detail_main__attendees-image">
            <img
              src={require("../../assets/Images/picture-2.png")}
              alt="viewers"
            />
          </div>
          <div className="col detail_main__event-subtitle">Event Detail</div>
          <div className="col detail_main__event-desc">
            {event ? (
              readMore ? (
                `${halfDetail} ...`
              ) : (
                event.detail
              )
            ) : (
              <div> &nbsp;</div>
            )}
          </div>
          <div
            className="col detail_main__read-more"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "Read More" : "Read Less"}
          </div>
          <div className="col detail_main__event-subtitle">Location</div>
          <div className="col">
            <img
              src={require("../../assets/Images/picture-5.png")}
              alt="maps"
              className="detail_main__maps"
            />
          </div>
          <div
            className="detail_main__button"
            onClick={() => {
              navigateHandler(`booking/${id}`);
            }}
          >
            Buy Tickets
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default index;
