import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function index() {
  return (
    <div className="profile_body">
      <Header />
      <main className="profile_main row">
        <div className="profile_left-side d-none d-sm-block col-sm-6 col-md-4 col-lg-3">
          <div className="profile_left-side__main">
            <div>
              <img
                src={require("../../assets/Images/picture-4.png")}
                alt="profile"
                className="profile_left-side__picture"
              />
            </div>
            <div>
              <div className="profile_left-side__name">Jhon Tomson</div>
              <div className="profile_left-side__desc">Entrepreneur, ID</div>
            </div>
          </div>
          <div className="profile_left-side__tab">
            <img
              src={require("../../assets/Vectors/Vector-1.png")}
              alt="logo"
              className="profile_left-side__tab-image"
            />
            <div>Profile</div>
          </div>
          <div className="profile_left-side__tab-container">
            <div className="profile_left-side__tab">
              <img
                src={require("../../assets/Vectors/Vector-2.png")}
                alt="logo"
                className="profile_left-side__tab-image"
              />
              <div>Edit Profile</div>
            </div>
            <div className="profile_left-side__tab">
              <img
                src={require("../../assets/Vectors/Vector-3.png")}
                alt="logo"
                className="profile_left-side__tab-image"
              />
              <div>Change Password</div>
            </div>
          </div>
          <div className="profile_left-side__tab">
            <img
              src={require("../../assets/Vectors/Vector-4.png")}
              alt="logo"
              className="profile_left-side__tab-image"
            />
            <div>My Booking</div>
          </div>
          <div className="profile_left-side__tab">
            <img
              src={require("../../assets/Vectors/Vector-5.png")}
              alt="logo"
              className="profile_left-side__tab-image"
            />
            <div>My Wishlist</div>
          </div>
          <div className="profile_left-side__tab">
            <img
              src={require("../../assets/Vectors/Vector-6.png")}
              alt="logo"
              className="profile_left-side__tab-image"
            />
            <div>Settings</div>
          </div>
          <div className="profile_left-side__logout">
            <img
              src={require("../../assets/Vectors/Vector-7.png")}
              alt="logo"
              className="profile_left-side__tab-image"
            />
            <div>Logout</div>
          </div>
        </div>
        <div className="profile_right-side col-sm-6 col-md-8 col-lg-9">
          <div className="profile_right-side__title">Profile</div>
          <div className="profile_right-side__main">
            <label
              htmlFor="name"
              className="profile_right-side__input-container"
            >
              Name
              <input id="name" type="text" />
            </label>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default index;
