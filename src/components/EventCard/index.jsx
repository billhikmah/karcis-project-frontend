import { useNavigate } from "react-router-dom";
import "./index.css";
import moment from "moment";
import { EmojiFrown } from "react-bootstrap-icons";

function EventCard(props) {
  const events = props.item;
  const navigate = useNavigate();
  const navigateHandler = (path) => {
    navigate(`/${path}`);
  };
  return (
    <div>
      <div className="event-card__card">
        {events.length !== 0 ? (
          events.map((e) => {
            return (
              <div
                className="event-card__card-options"
                key={e.id}
                onClick={() => {
                  navigateHandler(`detail/${e.id}`);
                }}
              >
                <div className="event-card__card-image-container">
                  <img
                    src={
                      e.image
                        ? `https://res.cloudinary.com/starbillscloud/image/upload/v1663094115/${e.image} `
                        : require("../../assets/Images/picture-7.jpg")
                    }
                    alt="movie poster"
                    className="event-card__card-image"
                  />
                </div>
                <div className="event-card__card-date">
                  {moment(e.date_time_show).format("ddd, DD MMM h:mm A")}
                </div>
                <div className="event-card__card-title">{e.name}</div>
                <img
                  src={require("../../assets/Images/picture-2.png")}
                  className="event-card__card-viewers"
                />
              </div>
            );
          })
        ) : (
          <div className="event-card__card-not-found">
            <EmojiFrown />
            <div className="event-card__card-not-found-text">
              Sorry, event not found.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventCard;
