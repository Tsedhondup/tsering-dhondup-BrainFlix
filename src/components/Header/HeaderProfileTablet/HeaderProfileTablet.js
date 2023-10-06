import "./HeaderProfileTablet.scss";
import Profile from "../../../assets/images/Mohan-muruge.jpg";
let HeaderProfileTablet = () => {
  return (
    <div className="header-tablet-profile-container">
      <img
        className="header-tablet-profile-container__profile"
        src={Profile}
        alt="profile"
      ></img>
    </div>
  );
};

export default HeaderProfileTablet;
