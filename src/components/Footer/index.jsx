import "./index.css";
import { useNavigate } from "react-router-dom";

function index() {
  const navigate = useNavigate();
  const navigateHandler = (path) => {
    navigate(`/${path}`);
  };
  return (
    <footer className="col container mx-auto py-5">
      <div className="row col-sm-12">
        <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
          <div className="col">
            <div
              className="footer__title"
              onClick={() => {
                navigateHandler("");
              }}
            >
              <img
                src={require("../../assets/Vectors/logo-1.png")}
                alt="logo"
                className="footer__logo"
              />
              <div>
                Kar<span className="footer__title-detail">cis</span>
              </div>
            </div>
          </div>
          <div className="col footer__title--2">
            Find events you love with us
          </div>
          <div className="row">
            <div className="col-1" role="button">
              <img
                src={require("../../assets/Vectors/logo-4.png")}
                alt="social media logo"
              />
            </div>
            <div className="col-1" role="button">
              <img
                src={require("../../assets/Vectors/logo-5.png")}
                alt="social media logo"
              />
            </div>
            <div className="col-1" role="button">
              <img
                src={require("../../assets/Vectors/logo-6.png")}
                alt="social media logo"
              />
            </div>
            <div className="col-1" role="button">
              <img
                src={require("../../assets/Vectors/logo-7.png")}
                alt="social media logo"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2 mb-5">
          <div className="col footer__title">Wetick</div>
          <div className="col footer__content" role="button">
            About Us
          </div>
          <div className="col footer__content" role="button">
            Features
          </div>
          <div className="col footer__content" role="button">
            Blog
          </div>
          <div className="col footer__content" role="button">
            Payments
          </div>
          <div className="col footer__content" role="button">
            Mobile App
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2 mb-5">
          <div className="col footer__title">Features</div>
          <div className="col footer__content" role="button">
            Booking
          </div>
          <div className="col footer__content" role="button">
            Create Event
          </div>
          <div className="col footer__content" role="button">
            Discover
          </div>
          <div className="col footer__content" role="button">
            Register
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2 mb-5">
          <div className="col footer__title">Company</div>
          <div className="col footer__content" role="button">
            Partnership
          </div>
          <div className="col footer__content" role="button">
            Help
          </div>
          <div className="col footer__content" role="button">
            Terms of Service
          </div>
          <div className="col footer__content" role="button">
            Privacy Policy
          </div>
          <div className="col footer__content" role="button">
            Sitemap
          </div>
        </div>
      </div>
      <div className="row col-sm-12 footer__title">
        © 2020 Karcis All Rights Reserved
      </div>
    </footer>
  );
}

export default index;
