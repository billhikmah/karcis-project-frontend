import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import EventCard from "../../components/EventCard";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";

function Location() {
  const [seeAll, setSeeAll] = useState(true);
  const [events, setEvents] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [showLocation, setShowLocation] = useState("navigation");

  useEffect(() => {
    if (showLocation !== "navigation") {
      setPage(1);
      getEventsByLocation();
    }
  }, [showLocation]);
  useEffect(() => {
    getEventsByLocation();
  }, [page]);
  const getEventsByLocation = async () => {
    try {
      if (showLocation === "navigation") {
        setEvents([]);
        setTotalPage(1);
        return;
      }
      const result = await axios.get(
        `/api/event/?location=${showLocation}&sort=name&order=true&page=${page}&limit=5`
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
  const locationHandler = (e) => {
    setShowLocation(e.target.value);
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
    <div>
      {showLocation === "navigation" ? (
        <div className="location">
          <div className="location__bar">
            <span className="material-symbols-outlined"> horizontal_rule </span>
            LOCATION
          </div>
          <div className="location__container">
            <div className="location__title">Discover Events Near You</div>
            <div className="location__card">
              <img
                src={require("../../assets/Images/location-jakarta.png")}
                alt="location"
                className="location__image"
                onClick={() => {
                  setShowLocation("42fb3705-7edb-4b01-95c3-1486360a9348");
                }}
              />
              <div>Jakarta</div>
            </div>
            <div className="location__card">
              <img
                src={require("../../assets/Images/location-bandung.png")}
                alt="location"
                className="location__image"
                onClick={() => {
                  setShowLocation("e584a694-d143-44b1-8e26-66fe7622f960");
                }}
              />
              <div>Bandung</div>
            </div>
            <div className="location__card">
              <img
                src={require("../../assets/Images/location-bali.png")}
                alt="location"
                className="location__image"
                onClick={() => {
                  setShowLocation("4b6ce6c6-1205-4333-9798-c5ebffa370bc");
                }}
              />
              <div>Bali</div>
            </div>
            <div className="location__card">
              <img
                src={require("../../assets/Images/location-aceh.png")}
                alt="location"
                className="location__image"
                onClick={() => {
                  setShowLocation("0fc4a2fb-266d-4ac6-b8d7-060e2bb2ee7c");
                }}
              />
              <div>Aceh</div>
            </div>
            <div className="location__card">
              <img
                src={require("../../assets/Images/location-solo.png")}
                alt="location"
                className="location__image"
                onClick={() => {
                  setShowLocation("55dc78af-34b1-4887-8632-901516a700b7");
                }}
              />
              <div>Solo</div>
            </div>
            <div className="location__card">
              <img
                src={require("../../assets/Images/location-yogya.png")}
                alt="location"
                className="location__image"
                onClick={() => {
                  setShowLocation("2a27e1dc-8fbe-4184-a666-cf0bd7bd8243");
                }}
              />
              <div>Yogyakarta</div>
            </div>
            <div className="location__card">
              <img
                src={require("../../assets/Images/location-semarang.png")}
                alt="location"
                className="location__image"
                onClick={() => {
                  setShowLocation("66e897a4-c784-497c-8b1f-bf90098695f1");
                }}
              />
              <div>Semarang</div>
            </div>
            {seeAll ? (
              <></>
            ) : (
              <>
                <div className="location__card">
                  <img
                    src={require("../../assets/Images/location-bdl.jpg")}
                    alt="location"
                    className="location__image"
                    onClick={() => {
                      setShowLocation("cb8dfda5-8698-47ef-bd25-01632ea70dc7");
                    }}
                  />
                  <div>Bandar Lampung</div>
                </div>
                <div className="location__card">
                  <img
                    src={require("../../assets/Images/location-surabaya.jpg")}
                    alt="location"
                    className="location__image"
                    onClick={() => {
                      setShowLocation("31efcdb3-878c-42a6-aafd-5bbeab149cf0");
                    }}
                  />
                  <div>Surabaya</div>
                </div>
                <div className="location__card">
                  <img
                    src={require("../../assets/Images/location-medan.jpg")}
                    alt="location"
                    className="location__image"
                    onClick={() => {
                      setShowLocation("aa677212-f41b-4929-af85-5944457ffb89");
                    }}
                  />
                  <div>Medan</div>
                </div>
                <div className="location__card">
                  <img
                    src={require("../../assets/Images/location-cs.jpg")}
                    alt="location"
                    className="location__image"
                  />
                  <div>Cooming Soon</div>
                </div>
              </>
            )}
          </div>
          <div
            className="location__button"
            onClick={() => {
              setSeeAll(!seeAll);
            }}
          >
            {seeAll ? <div>SEE ALL</div> : <div>SEE LESS</div>}
          </div>
        </div>
      ) : (
        <div className="location">
          <div className="location__search-head">
            <div className="location__bar">
              <span className="material-symbols-outlined">
                {" "}
                horizontal_rule{" "}
              </span>
              Location
            </div>
            <div
              action="/action_page.php"
              htmlFor="location"
              className="location__search-location"
            >
              <select
                id="location"
                className="location__search-location-choices"
                onChange={locationHandler}
                value={showLocation}
              >
                <option value="" className="location__search-location-option">
                  All
                </option>
                <option
                  value="42fb3705-7edb-4b01-95c3-1486360a9348"
                  className="location__search-location-option"
                  data="asas"
                >
                  Jakarta
                </option>
                <option
                  value="e584a694-d143-44b1-8e26-66fe7622f960"
                  className="location__search-location-option"
                >
                  Bandung
                </option>
                <option
                  value="4b6ce6c6-1205-4333-9798-c5ebffa370bc"
                  className="location__search-location-option"
                >
                  Bali
                </option>
                <option
                  value="0fc4a2fb-266d-4ac6-b8d7-060e2bb2ee7c"
                  className="location__search-location-option"
                >
                  Aceh
                </option>
                <option
                  value="55dc78af-34b1-4887-8632-901516a700b7"
                  className="location__search-location-option"
                >
                  Solo
                </option>
                <option
                  value="2a27e1dc-8fbe-4184-a666-cf0bd7bd8243"
                  className="location__search-location-option"
                >
                  Yogyakarta
                </option>
                <option
                  value="66e897a4-c784-497c-8b1f-bf90098695f1"
                  className="location__search-location-option"
                >
                  Semarang
                </option>
                <option
                  value="=cb8dfda5-8698-47ef-bd25-01632ea70dc7"
                  className="location__search-location-option"
                >
                  Bandar Lampung
                </option>
                <option
                  value="31efcdb3-878c-42a6-aafd-5bbeab149cf0"
                  className="location__search-location-option"
                >
                  Surabaya
                </option>
                <option
                  value="aa677212-f41b-4929-af85-5944457ffb89"
                  className="location__search-location-option"
                >
                  Medan
                </option>
              </select>
            </div>
          </div>
          <EventCard item={events} />
          <div className="location__pagination">
            <ArrowLeft
              className={
                page === 1
                  ? "location__pagination-box-off"
                  : "location__pagination-box"
              }
              onClick={previousPageHandler}
            />
            <div className="location__pagination-text">
              {page}/{totalPage}
            </div>
            <ArrowRight
              className={
                page === totalPage
                  ? "location__pagination-box-off"
                  : "location__pagination-box"
              }
              onClick={nextPageHandler}
            />
          </div>
          <div
            className="location__button"
            onClick={() => {
              setShowLocation("navigation");
            }}
          >
            {showLocation === "navigation" ? <></> : <div>BACK</div>}
          </div>
        </div>
      )}
    </div>
  );
}

export default Location;
