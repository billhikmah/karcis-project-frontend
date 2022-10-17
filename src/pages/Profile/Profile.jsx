import { useState } from "react";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../../redux/action/user";

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const defaultData = useSelector((state) => state.user.userInfo[0]);
  const userData = useSelector((state) => state.user);

  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const updateHandler = async () => {
    try {
      await dispatch(updateUserAction(form));
      setMessage("Your profile is successfully updated");
      modalHandler(true);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };
  const modalHandler = (status) => {
    setShowModal(status);
  };
  const navigateHandler = (path) => {
    if (path === "close") {
      setShowModal(false);
      return;
    }
    navigate(`/${path}`);
  };

  return (
    <div className="profile_right-side col-sm-6 col-md-8 col-lg-9">
      <div className="profile_right-side__title">Profile</div>
      <div className="profile_right-side__container row ">
        <div className="profile_right-side__main order-2 col-sm-12 order-sm-2 col-md-12 col-lg-8 order-md-2 order-lg-1 col">
          <div className="profile_right-side__input-container">
            <label htmlFor="name" className="profile_right-side__input-label">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="profile_right-side__input"
              placeholder="Name"
              defaultValue={defaultData.name}
              onChange={formHandler}
            />
          </div>
          <div className="profile_right-side__input-container">
            <label
              htmlFor="username"
              className="profile_right-side__input-label"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              className="profile_right-side__input"
              placeholder="Username"
              defaultValue={defaultData.username}
              onChange={formHandler}
            />
          </div>
          <div className="profile_right-side__input-container">
            <label htmlFor="email" className="profile_right-side__input-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              className="profile_right-side__input"
              placeholder="Email"
              defaultValue={defaultData.email}
              disabled
              onChange={formHandler}
            />
          </div>
          <div className="profile_right-side__input-container">
            <label htmlFor="phone" className="profile_right-side__input-label">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="number"
              className="profile_right-side__input"
              placeholder="Phone Number"
              defaultValue={`0${defaultData.phone}`}
              onChange={formHandler}
            />
          </div>
          <div className="profile_right-side__input-container">
            <label className="profile_right-side__input-label">Gender</label>
            <div className="profile_right-side__input-wrapper">
              <div className="profile_right-side__radio">
                <input
                  id="male"
                  name="gender"
                  type="radio"
                  placeholder="Profession"
                  checked={
                    defaultData.gender.id ===
                    "75f7e98d-c7f1-4877-9902-f3b155f4e389"
                      ? "checked"
                      : null
                  }
                  value="75f7e98d-c7f1-4877-9902-f3b155f4e389"
                  onChange={formHandler}
                />
                <label
                  htmlFor="male"
                  className="profile_right-side__radio-label"
                >
                  Male
                </label>
              </div>
              <div className="profile_right-side__radio">
                <input
                  id="female"
                  name="gender"
                  type="radio"
                  placeholder="Profession"
                  checked={
                    defaultData.gender.id ===
                    "c2ecc310-d009-4ea8-93f8-f903daf4bee7"
                      ? "checked"
                      : null
                  }
                  value="c2ecc310-d009-4ea8-93f8-f903daf4bee7"
                  onChange={formHandler}
                />
                <label
                  htmlFor="female"
                  className="profile_right-side__radio-label"
                >
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="profile_right-side__input-container">
            <label
              htmlFor="profession"
              className="profile_right-side__input-label"
            >
              Profession
            </label>
            <select
              id="profession"
              name="profession"
              className="profile_right-side__select"
              defaultValue={
                defaultData.profession ? defaultData.profession.id : ""
              }
              onChange={formHandler}
            >
              <option value="" className="profile_right-side__option">
                --Select--
              </option>
              <option
                value="acc88543-f776-410b-8533-186ae57a0f93"
                className="profile_right-side__option"
              >
                Entrepreneur
              </option>
              <option
                value="ff20d4f9-c2df-4e40-88e6-9fdaeffaec56"
                className="profile_right-side__option"
              >
                Doctor
              </option>
              <option
                value="fdb12b9f-bcf4-4904-a571-9f3aaaf6f03e"
                className="profile_right-side__option"
              >
                Programmer
              </option>
              <option
                value="de2ef15a-625d-43a6-be09-128c4528a303"
                className="profile_right-side__option"
              >
                etc.
              </option>
            </select>
          </div>
          <div className="profile_right-side__input-container">
            <label className="profile_right-side__input-label">
              Nationality
            </label>
            <select
              id="nationality"
              name="nationality"
              className="profile_right-side__select"
              defaultValue={
                defaultData.nationality ? defaultData.nationality.id : ""
              }
              onChange={formHandler}
            >
              <option value="" className="profile_right-side__option">
                --Select--
              </option>
              <option
                value="e02aebda-6a9a-4af6-bcb7-2633a8ef99ea"
                className="profile_right-side__option"
              >
                Indonesian
              </option>
              <option
                value="254fbbcd-1c7d-4303-bc20-a33c6608f405"
                className="profile_right-side__option"
              >
                Foreigner
              </option>
            </select>
          </div>
          <div className="profile_right-side__input-container">
            <label className="profile_right-side__input-label">
              Birthday Date
            </label>
            <input
              id="date_of_birth"
              name="date_of_birth"
              type="date"
              className="profile_right-side__select"
              placeholder="Birthday Date"
              defaultValue={defaultData.date_of_birth}
              onChange={formHandler}
            />
          </div>
          <div className="profile_right-side__save" onClick={updateHandler}>
            Save
          </div>
        </div>
        <div className="profile_right-side__tab order-1 col-sm-12 order-sm-1 col-md-12 order-md-1 col-lg-4 order-lg-2">
          <label htmlFor="image">
            <img
              src={
                userData
                  ? `https://res.cloudinary.com/starbillscloud/image/upload/v1663094115/${userData.userInfo[0].image}`
                  : require("../../assets/Images/picture-6.jpg")
              }
              alt="preview"
              className="profile_right-side__picture"
            />
            <img
              src={require("../../assets/Vectors/Vektor-9.png")}
              alt="preview"
              className="profile_right-side__camera"
            />
          </label>
          <div>
            <input type="file" id="image" />
            <label htmlFor="image" className="profile_right-side__button">
              Choose Photo
            </label>
          </div>
          <div className="profile_right-side__text">Image size: max, 2 MB</div>
          <div className="profile_right-side__text">
            Image formats: .JPG, .JPEG, .PNG
          </div>
        </div>
      </div>

      <Modal
        navigateHandler={navigateHandler}
        showModal={showModal}
        title="Update Profile"
        message={message}
        blueButton="Home"
        bluePath=""
        whiteButton="Close"
        whitePath="close"
      />
    </div>
  );
}
