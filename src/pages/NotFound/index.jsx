import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function NotFound() {
  return (
    <div>
      <Header />
      <main className="notfound_main__banner">
        <img
          src={require("../../assets/Images/banner-1.png")}
          alt="notfound_main-banner"
          className="notfound_main__banner-image--1"
        />
        <img
          src={require("../../assets/Images/picture-1.png")}
          alt="notfound_main-banner"
          className="notfound_main__banner-image--2"
        />
        <div className="notfound_main__title">
          404!
          <br />
          Page Not Found
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
