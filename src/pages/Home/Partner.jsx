function Partner() {
  return (
    <div className="partner">
      <div className="partner__bar">
        <span className="material-symbols-outlined"> horizontal_rule </span>
        PARTNER
      </div>
      <div className="partner__title">Our Trusted Partners</div>
      <div className="partner__sub-title">By companies like :</div>
      <div className="partner__icon">
        <img
          src={require("../../assets/Images/Icon-01.png")}
          alt="partner logo"
          className="partner__icon-image"
        />
        <img
          src={require("../../assets/Images/Icon-02.png")}
          alt="partner logo"
          className="partner__icon-image"
        />
        <img
          src={require("../../assets/Images/Icon-03.png")}
          alt="partner logo"
          className="partner__icon-image"
        />
        <img
          src={require("../../assets/Images/Icon-04.png")}
          alt="partner logo"
          className="partner__icon-image"
        />
        <img
          src={require("../../assets/Images/Icon-05.png")}
          alt="partner logo"
          className="partner__icon-image"
        />
        <img
          src={require("../../assets/Images/Icon-06.png")}
          alt="partner logo"
          className="partner__icon-image"
        />
      </div>
    </div>
  );
}

export default Partner;
