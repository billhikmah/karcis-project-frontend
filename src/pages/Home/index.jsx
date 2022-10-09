import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Partner from "./Partner";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";

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
            <ArrowRight />
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
        </div>
        <div className="home_event__pagination">
          <ArrowLeft className="home_event__pagination-box" />
          <ArrowRight className=" home_event__pagination-box" />
        </div>
      </section>
      <Partner />
      <Footer />
    </div>
  );
}

export default Home;
