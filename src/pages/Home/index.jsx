import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Partner from "./Partner";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import moment from "moment";

function Home() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [events, setEvents] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [dateShow, setDateShow] = useState(moment().format("YYYY-MM-DD"));
  const [listDateShow, setListDateShow] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getEvents();
  }, []);
  useEffect(() => {
    generateDate();
    setPage(1);
    getEvents();
  }, [dateShow]);
  useEffect(() => {
    getEvents();
  }, [page]);

  const getEvents = async () => {
    try {
      const result = await axios.get(
        `/api/event/?date=${dateShow}&sort=name&order=true&page=${page}&limit=5`
      );
      setEvents(result.data.data);
      setTotalPage(result.data.pagination.totalPage);
    } catch (error) {
      if (
        error.response.status === 404 &&
        error.response.data.message === "Data not found."
      ) {
        setEvents(error.response.data.data);
        setTotalPage(1);
      }
    }
  };
  const generateDate = () => {
    let listDate = [
      moment(dateShow).subtract(2, "days"),
      moment(dateShow).subtract(1, "days"),
      dateShow,
      moment(dateShow).subtract(-1, "days"),
      moment(dateShow).subtract(-2, "days"),
    ];
    setListDateShow(listDate);
  };

  const keywordHandler = (e) => {
    setKeyword(e.target.value);
  };
  const locationHandler = (e) => {
    setLocation(e.target.value);
  };
  const selectDateHandler = (date) => {
    setDateShow(date);
  };
  const previousPageHandler = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };
  const nextPageHandler = () => {
    if (page !== totalPage) {
      setPage(page + 1);
    }
  };
  const navigate = useNavigate();
  const navigateHandler = (path) => {
    navigate(`/${path}`);
  };

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
          <label className="home_main__search-keyword">
            <span className="material-symbols-outlined"> search </span>
            <input
              type="text"
              className="home_main__input"
              placeholder="Search event..."
              id="input-search"
              onChange={keywordHandler}
            />
          </label>
          <div
            action="/action_page.php"
            htmlFor="location"
            className="home_main__search-location"
          >
            <span className="material-symbols-outlined"> location_on </span>
            <select
              id="location"
              name="location"
              className="home_main__search-location-choices"
              onChange={locationHandler}
              placeholder="hash"
            >
              <option value="" className="home_main__search-location-option">
                Where?
              </option>
              <option
                value="42fb3705-7edb-4b01-95c3-1486360a9348"
                className="home_main__search-location-option"
              >
                Jakarta
              </option>
              <option
                value="e584a694-d143-44b1-8e26-66fe7622f960"
                className="home_main__search-location-option"
              >
                Bandung
              </option>
            </select>
          </div>
          {/* <label className="home_main__search-item">
            
            <input
              type="text"
              className="home_main__input"
              placeholder="Where?"
            />
          </label> */}
          <div
            className="home_main__search-button"
            onClick={() => {
              navigateHandler(`search/keyword=${keyword}&location=${location}`);
            }}
          >
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
          {listDateShow.map((element, index) => {
            if (index !== 2) {
              return (
                <div
                  className="home_event__date-options"
                  key={index}
                  onClick={() => {
                    selectDateHandler(moment(element).format("YYYY-MM-DD"));
                  }}
                >
                  {moment(element).format("DD")}
                  <br />
                  {moment(element).format("ddd")}
                </div>
              );
            }
            return (
              <div
                className="home_event__date-options"
                key={index}
                id="home_event__date--today"
                onClick={() => {
                  selectDateHandler(moment(element).format("YYYY-MM-DD"));
                }}
              >
                {moment(element).format("DD")}
                <br />
                {moment(element).format("ddd")}
              </div>
            );
          })}
        </div>
        <div className="home_event__card">
          {events.length !== 0 ? (
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
            <div className="home_event__card-not-found">Data not found.</div>
          )}
        </div>
        <div className="home_event__pagination">
          <ArrowLeft
            className={
              page === 1
                ? "home_event__pagination-box-off"
                : "home_event__pagination-box"
            }
            onClick={previousPageHandler}
          />
          <div className="home_event__pagination-text">
            {page}/{totalPage}
          </div>
          <ArrowRight
            className={
              page === totalPage
                ? "home_event__pagination-box-off"
                : "home_event__pagination-box"
            }
            onClick={nextPageHandler}
          />
        </div>
      </section>
      <Partner />
      <Footer />
    </div>
  );
}

export default Home;
