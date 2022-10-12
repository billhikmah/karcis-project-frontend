import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Profile from "./Profile";
import ChangePassword from "./ChangePassword";
import { useState } from "react";

function index() {
  const [tab, setTab] = useState("profile");
  return (
    <div className="profile_body">
      <Header />
      <main className="profile_main row">
        <div className="profile_left-side d-none d-sm-flex col-sm-6 col-md-4 col-lg-3">
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
            <div
              className="profile_left-side__tab"
              onClick={() => {
                setTab("profile");
              }}
            >
              <img
                src={require("../../assets/Vectors/Vector-2.png")}
                alt="logo"
                className="profile_left-side__tab-image"
              />
              <div>Edit Profile</div>
            </div>
            <div
              className="profile_left-side__tab"
              onClick={() => {
                setTab("changePassword");
              }}
            >
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
        {tab === "profile" ? <Profile /> : <></>}
        {tab === "changePassword" ? <ChangePassword /> : <></>}
      </main>
      <Footer />
    </div>
  );
}

export default index;
