import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Profile from "./Profile";
import MyBooking from "./MyBooking";
import MyWishlist from "./MyWishlist";
import ChangePassword from "./ChangePassword";
import Manage from "./Manage";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../redux/action/user";

function index() {
  const [tab, setTab] = useState("profile");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    setShowLogoutModal(true);
  };
  const modalHandler = async (data) => {
    if (data === "close") {
      return setShowLogoutModal(false);
    }
    try {
      dispatch(logoutAction());
      localStorage.clear();
      navigate("/");
    } catch (error) {
      localStorage.clear();
      navigate("/");
    }
  };

  return (
    <div className="profile_body">
      <Header />
      <main className="profile_main row">
        <div className="profile_left-side d-none d-sm-flex col-sm-6 col-md-4 col-lg-3">
          <div className="profile_left-side__main">
            <div>
              <img
                src={
                  userData
                    ? `https://res.cloudinary.com/starbillscloud/image/upload/v1663094115/${userData.userInfo[0].image}`
                    : require("../../assets/Images/picture-6.jpg")
                }
                alt="profile"
                className="profile_left-side__picture"
              />
            </div>
            <div>
              <div className="profile_left-side__name">
                {userData ? userData.userInfo[0].name : ""}
              </div>
              <div className="profile_left-side__desc">
                {userData ? `${userData.userInfo[0].profession.name},  ID` : ""}
              </div>
            </div>
          </div>
          <div
            className="profile_left-side__tab"
            onClick={() => {
              setTab("profile");
            }}
          >
            <img
              src={require("../../assets/Vectors/Vector-1.png")}
              alt="logo"
              className="profile_left-side__tab-image"
            />
            <div>Profile</div>
          </div>
          <div className="profile_left-side__tab-container">
            <div
              className={
                tab !== "profile"
                  ? "profile_left-side__tab"
                  : "profile_left-side__tab-active"
              }
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
              className={
                tab !== "changePassword"
                  ? "profile_left-side__tab"
                  : "profile_left-side__tab-active"
              }
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
          {userData.role === "admin" ? (
            <div
              className={
                tab !== "manage"
                  ? "profile_left-side__tab"
                  : "profile_left-side__tab-active"
              }
              onClick={() => {
                setTab("manage");
              }}
            >
              <img
                src={require("../../assets/Vectors/Vector-10.png")}
                alt="logo"
                className="profile_left-side__tab-image"
              />
              <div>Manage Event</div>
            </div>
          ) : (
            <>
              <div
                className={
                  tab !== "myBooking"
                    ? "profile_left-side__tab"
                    : "profile_left-side__tab-active"
                }
                onClick={() => {
                  setTab("myBooking");
                }}
              >
                <img
                  src={require("../../assets/Vectors/Vector-4.png")}
                  alt="logo"
                  className="profile_left-side__tab-image"
                />
                <div>My Booking</div>
              </div>
              <div
                className={
                  tab !== "myWishlist"
                    ? "profile_left-side__tab"
                    : "profile_left-side__tab-active"
                }
                onClick={() => {
                  setTab("myWishlist");
                }}
              >
                <img
                  src={require("../../assets/Vectors/Vector-5.png")}
                  alt="logo"
                  className="profile_left-side__tab-image"
                />
                <div>My Wishlist</div>
              </div>
            </>
          )}
          <div className="profile_left-side__tab">
            <img
              src={require("../../assets/Vectors/Vector-6.png")}
              alt="logo"
              className="profile_left-side__tab-image"
            />
            <div>Settings</div>
          </div>
          <div
            className="profile_left-side__logout"
            onClick={() => {
              logoutHandler();
            }}
          >
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
        {tab === "myBooking" ? <MyBooking /> : <></>}
        {tab === "myWishlist" ? <MyWishlist /> : <></>}
        {tab === "manage" ? <Manage /> : <></>}
      </main>
      <Footer />
      <Modal
        navigateHandler={modalHandler}
        showModal={showLogoutModal}
        title="Log Out"
        message="Are you sure to log out?"
        blueButton="Log Out"
        bluePath="logout"
        whiteButton="Cancel"
        whitePath="close"
      />
    </div>
  );
}

export default index;
