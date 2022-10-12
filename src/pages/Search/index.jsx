import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import axios from "../../utils/axios";
import EventCard from "../../components/EventCard";

function index() {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [sort, setSort] = useState("name");
  const [order, setOrder] = useState(true);
  let params = new URL(document.location).searchParams;
  const [keyword, setKeyword] = useState(params.get("keyword"));
  const [location, setLocation] = useState(params.get("location"));
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    getEvents();
  }, []);
  useEffect(() => {
    getEvents();
  }, [page, keyword, location, sort, order, page]);

  const getEvents = async () => {
    try {
      const result = await axios.get(
        `/api/event/?&key=${keyword}&location=${location}&sort=${sort}&order=${order}&page=${page}&limit=6`
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

  const keywordHandler = () => {
    setKeyword(search);
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const locationHandler = (e) => {
    setLocation(e.target.value);
  };
  const sortHander = (e) => {
    setSort(e.target.value);
  };
  const orderHandler = (e) => {
    setOrder(e.target.value);
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
  return (
    <div className="search_body">
      <Header />
      <main className="search_main row">
        <div className="search_left-side col-sm-6 col-md-4 col-lg-3">
          <label className="search_left-side__input-container">
            <input
              type="text"
              onChange={searchHandler}
              placeholder="search"
              className="search_left-side__input"
            />
            <div
              className="search_left-side__search-button"
              onClick={keywordHandler}
            >
              <ArrowRight />
            </div>
          </label>
          <div
            action="/action_page.php"
            htmlFor="location"
            className="search_left-side__dropdown"
          >
            <label className="search_left-side__dropdown-label">
              Location:
            </label>
            <select
              id="location"
              name="location"
              className="search_left-side__dropdown-choices"
              onChange={locationHandler}
              placeholder="hash"
            >
              <option value="" className="search_left-side__dropdown-option">
                All
              </option>
              <option
                value="42fb3705-7edb-4b01-95c3-1486360a9348"
                className="search_left-side__dropdown-option"
              >
                Jakarta
              </option>
              <option
                value="e584a694-d143-44b1-8e26-66fe7622f960"
                className="search_left-side__dropdown-option"
              >
                Bandung
              </option>
              <option
                value="4b6ce6c6-1205-4333-9798-c5ebffa370bc"
                className="search_left-side__dropdown-option"
              >
                Bali
              </option>
              <option
                value="0fc4a2fb-266d-4ac6-b8d7-060e2bb2ee7c"
                className="search_left-side__dropdown-option"
              >
                Aceh
              </option>
              <option
                value="55dc78af-34b1-4887-8632-901516a700b7"
                className="search_left-side__dropdown-option"
              >
                Solo
              </option>
              <option
                value="2a27e1dc-8fbe-4184-a666-cf0bd7bd8243"
                className="search_left-side__dropdown-option"
              >
                Yogyakarta
              </option>
              <option
                value="66e897a4-c784-497c-8b1f-bf90098695f1"
                className="search_left-side__dropdown-option"
              >
                Semarang
              </option>
              <option
                value="cb8dfda5-8698-47ef-bd25-01632ea70dc7"
                className="search_left-side__dropdown-option"
              >
                Bandar Lampung
              </option>
              <option
                value="31efcdb3-878c-42a6-aafd-5bbeab149cf0"
                className="search_left-side__dropdown-option"
              >
                Surabaya
              </option>
              <option
                value="aa677212-f41b-4929-af85-5944457ffb89"
                className="search_left-side__dropdown-option"
              >
                Medan
              </option>
            </select>
          </div>
          <div
            action="/action_page.php"
            htmlFor="sort"
            className="search_left-side__dropdown"
          >
            <label className="search_left-side__dropdown-label">Sort:</label>
            <select
              id="sort"
              name="location"
              className="search_left-side__dropdown-choices"
              onChange={sortHander}
              placeholder="hash"
            >
              <option
                value="name"
                className="search_left-side__dropdown-option"
              >
                Sort by Name
              </option>
              <option
                value="date"
                className="search_left-side__dropdown-option"
              >
                Sort by Date
              </option>
            </select>
          </div>
          <div
            action="/action_page.php"
            htmlFor="order"
            className="search_left-side__dropdown"
          >
            <label className="search_left-side__dropdown-label">Order:</label>
            <select
              id="order"
              name="location"
              className="search_left-side__dropdown-choices"
              onChange={orderHandler}
              placeholder="hash"
            >
              <option
                value={true}
                className="search_left-side__dropdown-option"
              >
                Ascending
              </option>
              <option
                value={false}
                className="search_left-side__dropdown-option"
              >
                Descending
              </option>
            </select>
          </div>
        </div>
        <div className="search_right-side col-sm-6 col-md-8 col-lg-9">
          <div className="search_right-side__title">Search Result:</div>
          <EventCard item={events} />
          <div className="search_right-side__pagination">
            <ArrowLeft
              className={
                page === 1
                  ? "search_right-side__pagination-box-off"
                  : "search_right-side__pagination-box"
              }
              onClick={previousPageHandler}
            />
            <div className="search_right-side__pagination-text">
              {page}/{totalPage}
            </div>
            <ArrowRight
              className={
                page === totalPage
                  ? "search_right-side__pagination-box-off"
                  : "search_right-side__pagination-box"
              }
              onClick={nextPageHandler}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default index;
