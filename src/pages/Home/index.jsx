import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

function Home() {
  const [events, setEvents] = useState();
  // const [pagination, setPagination] = useState();
  const navigate = useNavigate();
  const navigateHandler = (path) => {
    navigate(`/${path}`);
  };

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    try {
      const result = await axios.get(
        "/api/event/?date=&key=&sort=name&order=true&page=1&limit=20"
      );
      setEvents(result.data.data);
      // setPagination(result.data.pagination);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      navigate("/*");
    }
  };
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <main className="home_main__banner">
        <img
          src={require("../../assets/Images/banner-1.png")}
          alt="home_main-banner"
          className="home_main__banner-image--1"
        />
        <img
          src={require("../../assets/Images/picture-1.png")}
          alt="home_main-banner"
          className="home_main__banner-image--2"
        />
        <div className="home_main__title">
          Find events you
          <br />
          love with us
        </div>
        <div className="home_main__search">
          <label className="home_main__search-item">
            <span className="material-symbols-outlined"> search </span>
            <input
              type="text"
              className="home_main__input"
              placeholder="Search event..."
              id="input-search"
            />
          </label>
          <label className="home_main__search-item">
            <span className="material-symbols-outlined"> location_on </span>
            <input
              type="text"
              className="home_main__input"
              placeholder="Where?"
            />
          </label>
          <div className="home_main__search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </div>
      </main>
      <section className="home_event">
        <div className="home_event__bar">
          <span className="material-symbols-outlined"> horizontal_rule </span>
          EVENT
        </div>
        <div className="home_event__title">Events For You</div>
        <div className="home_event__date">
          <div className="home_event__date-options">
            13
            <br />
            Mon
          </div>
          <div className="home_event__date-options">
            14
            <br />
            Tue
          </div>
          <div
            className="home_event__date-options"
            id="home_event__date--today"
          >
            15
            <br />
            Wed
          </div>
          <div className="home_event__date-options">
            16
            <br />
            Thu
          </div>
          <div className="home_event__date-options">
            17
            <br />
            Fri
          </div>
        </div>
        <div className="home_event__card">
          {events ? (
            events.map((e) => {
              return (
                <div
                  className="home_event__card-options"
                  key={e.id}
                  onClick={() => {
                    navigateHandler(`detail/${e.id}`);
                  }}
                >
                  <div className="home_event__card-image-container">
                    <img
                      src={
                        e.image
                          ? `https://res.cloudinary.com/starbillscloud/image/upload/v1663094115/${e.image} `
                          : require("../../assets/Images/picture-7.jpg")
                      }
                      alt="movie poster"
                      className="home_event__card-image"
                    />
                  </div>
                  <div className="home_event__card-date">
                    Wed, 15 Nov, 4:00 PM
                  </div>
                  <div className="home_event__card-title">{e.name}</div>
                  <img
                    src={require("../../assets/Images/picture-2.png")}
                    className="home_event__card-viewers"
                  />
                </div>
              );
            })
          ) : (
            <>not found</>
          )}
          {/* <div className="home_event__card-options">
            <div className="home_event__card-image-container">
              <img
                src={require("../../assets/Images/picture-4.png")}
                alt="movie poster"
                className="home_event__card-image"
              />
            </div>
            <div className="home_event__card-date">Thu, 16 Nov, 7:00 PM</div>
            <div className="home_event__card-title">See it in Gold Class</div>
            <img
              src={require("../../assets/Images/picture-2.png")}
              className="home_event__card-viewers"
            />
          </div>
          <div className="home_event__card-options">
            <div className="home_event__card-image-container">
              <img
                src={require("../../assets/Images/picture-3.png")}
                alt="movie poster"
                className="home_event__card-image"
              />
            </div>
            <div className="home_event__card-date">Wed, 15 Nov, 4:00 PM</div>
            <div className="home_event__card-title">
              Sights & Sounds Exhibition
            </div>
            <img
              src={require("../../assets/Images/picture-2.png")}
              className="home_event__card-viewers"
            />
          </div>
          <div className="home_event__card-options">
            <div className="home_event__card-image-container">
              <img
                src={require("../../assets/Images/picture-4.png")}
                alt="movie poster"
                className="home_event__card-image"
              />
            </div>
            <div className="home_event__card-date">Thu, 16 Nov, 7:00 PM</div>
            <div className="home_event__card-title">See it in Gold Class</div>
            <img
              src={require("../../assets/Images/picture-2.png")}
              className="home_event__card-viewers"
            />
          </div> */}
        </div>
        <div className="home_event__pagination">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-left home_event__pagination-box"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-right home_event__pagination-box"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
