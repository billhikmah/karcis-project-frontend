import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Partner from "./Partner";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import moment from "moment";
import EventCard from "../../components/EventCard";

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
              <option
                value="4b6ce6c6-1205-4333-9798-c5ebffa370bc"
                className="home_main__search-location-option"
              >
                Bali
              </option>
              <option
                value="0fc4a2fb-266d-4ac6-b8d7-060e2bb2ee7c"
                className="home_main__search-location-option"
              >
                Aceh
              </option>
              <option
                value="55dc78af-34b1-4887-8632-901516a700b7"
                className="home_main__search-location-option"
              >
                Solo
              </option>
              <option
                value="2a27e1dc-8fbe-4184-a666-cf0bd7bd8243"
                className="home_main__search-location-option"
              >
                Yogyakarta
              </option>
              <option
                value="66e897a4-c784-497c-8b1f-bf90098695f1"
                className="home_main__search-location-option"
              >
                Semarang
              </option>
              <option
                value="cb8dfda5-8698-47ef-bd25-01632ea70dc7"
                className="home_main__search-location-option"
              >
                Bandar Lampung
              </option>
              <option
                value="31efcdb3-878c-42a6-aafd-5bbeab149cf0"
                className="home_main__search-location-option"
              >
                Surabaya
              </option>
              <option
                value="aa677212-f41b-4929-af85-5944457ffb89"
                className="home_main__search-location-option"
              >
                Medan
              </option>
            </select>
          </div>
          <div
            className="home_main__search-button"
            onClick={() => {
              navigateHandler(`search?keyword=${keyword}&location=${location}`);
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
        <EventCard item={events} />
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
