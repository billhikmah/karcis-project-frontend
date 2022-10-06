import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

function index() {
  const [event, setEvent] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const navigateHandler = (path) => {
    navigate(`/${path}`);
  };

  useEffect(() => {
    getEventById();
  }, []);

  const getEventById = async () => {
    try {
      const result = await axios.get(`/api/event/${id}`);
      setEvent(result.data.data[0]);
    } catch (error) {
      navigate("/");
    }
  };
  window.scrollTo(0, 0);

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
          <div className="detail_main__add-wishlist">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
            <span className="detail_main__add-wishlist-text">
              Add to Wishlist
            </span>
          </div>
        </div>
        <div className="col col-12 col-lg-6 detail_main__right-side">
          <div className="col detail_main__title">
            {event ? event.name : <div> &nbsp;</div>}
          </div>
          <div className="row detail_main__icon-detail-container">
            <div className="col detail_main__icon-detail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt detail_main__icon"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              {event ? `${event.location.name}, Indonesia` : <div> &nbsp;</div>}
            </div>
            <div className="col detail_main__icon-detail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-clock detail_main__icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
              </svg>
              Wed, 15 Nov, 4:00 PM
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
            {event ? event.detail : <div> &nbsp;</div>}
          </div>
          <div className="col detail_main__read-more">Read More</div>
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
              navigateHandler("booking");
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
