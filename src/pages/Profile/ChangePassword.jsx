export default function ChangePassword() {
  return (
    <div className="change profile_right-side col-sm-6 col-md-8 col-lg-9">
      <div className="profile_right-side__title">Change Password</div>
      <div className="change__input-container">
        <label
          htmlFor="old"
          className="col-sm-12 col-md-4 col-lg-4 change__label"
        >
          Old Password
        </label>
        <input
          type="text"
          id="old"
          placeholder="Input Old Password ..."
          className="col-sm-12 col-md-8 col-lg-8 change__input"
        />
      </div>
      <div className="change__input-container">
        <label
          htmlFor="new"
          className="col-sm-12 col-md-4 col-lg-4 change__label"
        >
          New Password
        </label>
        <input
          type="text"
          id="new"
          placeholder="Input New Password ..."
          className="col-sm-12 col-md-8 col-lg-8 change__input"
        />
      </div>
      <div className="change__input-container">
        <label
          htmlFor="confirm"
          className="col-sm-12 col-md-4 col-lg-4 change__label"
        >
          Confirm Password
        </label>
        <input
          type="text"
          id="confirm"
          placeholder="Input Old Password ..."
          className="col-sm-12 col-md-8 col-lg-8 change__input"
        />
      </div>
      <div className="change__button">Update</div>
    </div>
  );
}
