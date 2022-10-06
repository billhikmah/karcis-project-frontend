import "./index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

function index() {
  const [profilePicture, setProfilePicture] = useState();
  const [profileName, setProfileName] = useState();
  const navigate = useNavigate();
  const navigateHandler = (path) => {
    navigate(`/${path}`);
  };
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      getProfile();
    }
  }, []);

  const getProfile = async () => {
    try {
      const result = await axios.get("/api/user/details");
      setProfilePicture(result.data.data[0].image);
      setProfileName(result.data.data[0].name);
    } catch (error) {
      navigate("/*");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg px-4">
      <div className="container-fluid navbar__container">
        <div
          className="navbar-brand navbar__item"
          onClick={() => {
            navigateHandler("");
          }}
        >
          <div className="navbar__title">
            <img
              src={require("../../assets/Vectors/logo-1.png")}
              alt="logo"
              className="navbar__logo"
            />
            <div>
              Kar<span className="navbar__title-detail">cis</span>
            </div>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav mx-auto mb-2 mb-lg-0 navbar__center">
            <li className="nav-item navbar__link">
              <div
                className="nav-link active"
                aria-current="page"
                onClick={() => {
                  navigateHandler("");
                }}
              >
                Home
              </div>
            </li>
            <li className="nav-item navbar__link">
              <a className="nav-link active" aria-current="page" href="#">
                Create Event
              </a>
            </li>
            <li className="nav-item navbar__link">
              <a className="nav-link active" aria-current="page" href="#">
                Location
              </a>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {!token ? (
            <ul className="nav navbar-nav ms-auto mb-2 mb-lg-0">
              <div
                className="navbar__button-signin"
                type="submit"
                onClick={() => {
                  navigateHandler("signin");
                }}
              >
                Sign In
              </div>
              <div
                className="navbar__button-signup"
                type="submit"
                onClick={() => {
                  navigateHandler("signup");
                }}
              >
                Sign Up
              </div>
            </ul>
          ) : (
            <ul className="nav navbar-nav ms-auto mb-2 mb-lg-0 navbar__profile">
              <img
                src={
                  profilePicture
                    ? `https://res.cloudinary.com/starbillscloud/image/upload/v1663094115/${profilePicture}`
                    : require("../../assets/Images/picture-6.jpg")
                }
                alt="profile"
                className="navbar__profile-picture"
              />
              <div className="navbar__profile-name">{profileName}</div>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default index;
