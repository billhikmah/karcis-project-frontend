export default function Profile() {
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
              type="text"
              className="profile_right-side__input"
              placeholder="Name"
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
              id="name"
              type="text"
              className="profile_right-side__input"
              placeholder="Username"
            />
          </div>
          <div className="profile_right-side__input-container">
            <label htmlFor="email" className="profile_right-side__input-label">
              Email
            </label>
            <input
              id="email"
              type="text"
              className="profile_right-side__input"
              placeholder="Email"
            />
          </div>
          <div className="profile_right-side__input-container">
            <label htmlFor="phone" className="profile_right-side__input-label">
              Phone Number
            </label>
            <input
              id="phone"
              type="number"
              className="profile_right-side__input"
              placeholder="Phone Number"
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
              defaultValue=""
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
              id="profession"
              name="profession"
              className="profile_right-side__select"
              defaultValue=""
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
              id="name"
              type="date"
              className="profile_right-side__select"
              placeholder="Birthday Date"
            />
          </div>
          <div className="profile_right-side__save">Save</div>
        </div>
        <div className="profile_right-side__tab order-1 col-sm-12 order-sm-1 col-md-12 order-md-1 col-lg-4 order-lg-2">
          <label htmlFor="image">
            <img
              src={require("../../assets/Images/picture-3.png")}
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
    </div>
  );
}
