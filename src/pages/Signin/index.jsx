import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import axios from "../../utils/axios";
import { Eye, EyeSlash } from "react-bootstrap-icons";

function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const signInHandler = async () => {
    try {
      if (!form.email || !form.password) {
        return setErrorMessage("Please fill in all required fields.");
      }
      const result = await axios.post("/api/auth/login", form);
      localStorage.setItem("token", result.data.data.token);
      localStorage.setItem("refreshToken", result.data.data.refreshToken);
      setErrorMessage(null);
      navigateHandler("");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  const navigateHandler = (path) => {
    navigate(`/${path}`);
  };
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <main className="signin_main">
        <section className="signin_left-side">
          <img
            src={require("../../assets/Images/picture-1.png")}
            alt="side-image"
            className="signin_left-side__logo"
          />
        </section>
        <section className="signin_right-side">
          <div
            className="signin_right-side__title"
            onClick={() => {
              navigateHandler("");
            }}
          >
            <img
              src={require("../../assets/Vectors/logo-1.png")}
              alt="logo"
              className="signin_right-side__logo"
            />
            <div>
              Kar<span className="signin_right-side__title-detail">cis</span>
            </div>
          </div>
          <div className="signin_right-side__page">Sign In</div>
          <div className="signin_right-side__page-desc">
            Hi, Welcome back to Karcis!
          </div>
          <form>
            <input
              type="text"
              placeholder="Email"
              className="signin_right-side__input"
              name="email"
              onChange={formHandler}
            />
            <div className="signin_right-side__input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="signin_right-side__password"
                name="password"
                onChange={formHandler}
              />
              {showPassword ? (
                <Eye
                  onClick={showPasswordHandler}
                  className="signin_right-side__eye"
                />
              ) : (
                <EyeSlash
                  onClick={showPasswordHandler}
                  className="signin_right-side__eye"
                />
              )}
            </div>
            <div
              className="signin_right-side__forgot"
              onClick={() => {
                navigateHandler("");
              }}
            >
              Forgot Password?
            </div>
            {errorMessage ? (
              <div className="signin_right-side__error-message">
                {errorMessage}
              </div>
            ) : (
              <div className="signin_right-side__error-message">&nbsp;</div>
            )}
            <div
              className="signin_right-side__input-button"
              onClick={signInHandler}
            >
              Sign In
            </div>
          </form>
          <section>
            <div className="signin_right-side__options-desc">
              or sign in with
            </div>
            <div className="signin_right-side__options-container">
              <div className="signin_right-side__options">
                <img
                  src={require("../../assets/Vectors/logo-2.png")}
                  alt="signin_right-side__logo-option"
                />
              </div>
              <div className="signin_right-side__options">
                <img
                  src={require("../../assets/Vectors/logo-3.png")}
                  alt="signin_right-side__logo-option"
                />
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;
