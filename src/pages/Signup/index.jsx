import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import Footer from "../../components/Footer";
import { Modal } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [agreement, setAgreement] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const navigateHandler = (path) => {
    navigate(`/${path}`);
  };
  const signUpHandler = async () => {
    try {
      if (!form.name || !form.email || !form.password || !confirmPassword) {
        return setErrorMessage("Please fill in all required fields.");
      }
      if (!agreement) {
        return setErrorMessage("Please confirm the terms and conditions.");
      }
      if (confirmPassword !== form.password) {
        return setErrorMessage("Password & Confirm Password do not match");
      }
      const result = await axios.post("/api/auth/register", form);
      setSuccessMessage(result.data.message);
      setErrorMessage(null);
      modalHandler(true);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };
  const agreementHandler = () => {
    setAgreement(!agreement);
  };
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };
  const showConfirmPasswordHandler = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const modalHandler = (status) => {
    setShowModal(status);
  };

  return (
    <div>
      <main className="signup_main">
        <section className="signup_left-side">
          <img
            src={require("../../assets/Images/picture-1.png")}
            alt="side-image"
            className="signup_left-side__logo"
          />
        </section>
        <section className="signup_right-side">
          <div
            className="signup_right-side__title"
            onClick={() => {
              navigateHandler("");
            }}
          >
            <img
              src={require("../../assets/Vectors/logo-1.png")}
              alt="logo"
              className="signup_right-side__logo"
            />
            <div>
              Kar<span className="signup_right-side__title-detail">cis</span>
            </div>
          </div>
          <div className="signup_right-side__page">Sign Up</div>
          <div className="signup_right-side__page-desc">
            Already have an account?
            <span
              className="signup_right-side__page-desc-detail"
              onClick={() => {
                navigateHandler("signin");
              }}
            >
              &nbsp;Sign in
            </span>
          </div>
          <form>
            <input
              type="text"
              placeholder="Full Name"
              className="signup_right-side__input"
              name="name"
              onChange={formHandler}
            />
            <input
              type="text"
              placeholder="Email"
              className="signup_right-side__input"
              name="email"
              onChange={formHandler}
            />
            <div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="signup_right-side__input"
                name="password"
                onChange={formHandler}
              />
              {showPassword ? (
                <Eye
                  onClick={showPasswordHandler}
                  className="signup_right-side__eye"
                />
              ) : (
                <EyeSlash
                  onClick={showPasswordHandler}
                  className="signup_right-side__eye"
                />
              )}
            </div>
            <div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="signup_right-side__input"
                name="password"
                onChange={confirmPasswordHandler}
              />
              {showConfirmPassword ? (
                <Eye
                  onClick={showConfirmPasswordHandler}
                  className="signup_right-side__eye-2"
                />
              ) : (
                <EyeSlash
                  onClick={showConfirmPasswordHandler}
                  className="signup_right-side__eye-2"
                />
              )}
            </div>
            <label className="signup_right-side__input-checkbox">
              <input type="checkbox" onChange={agreementHandler} />
              Accept terms and conditions
            </label>
            {errorMessage ? (
              <div className="signup_right-side__error-message">
                {errorMessage}
              </div>
            ) : (
              <div className="signup_right-side__error-message">&nbsp;</div>
            )}
            <div
              className="signup_right-side__input-button"
              onClick={signUpHandler}
            >
              Sign Up
            </div>
          </form>
        </section>
      </main>
      <Footer />
      <Modal show={showModal} size="s" centered className="modal">
        <Modal.Title className="modal-title">Great!</Modal.Title>
        <Modal.Body className="modal-body">
          <p>{successMessage}</p>
        </Modal.Body>
        <div className="modal-footer signup_modal__footer">
          <button
            className="signup_modal__button-active"
            onClick={() => {
              navigateHandler("");
            }}
          >
            Start Exploring
          </button>
          <button
            className="signup_modal__button-pasive"
            onClick={() => {
              navigateHandler("signin");
            }}
          >
            Sign in
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default SignUp;
