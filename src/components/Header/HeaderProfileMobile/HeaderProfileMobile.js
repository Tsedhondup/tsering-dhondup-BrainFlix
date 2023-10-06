import "./HeaderProfileMobile.scss";
import Profile from "../../../assets/images/Mohan-muruge.jpg";
let HeaderProfileMobile = () => {
  return (
    <div className="header-mobile-profile-container">
      <img
        className="header-mobile-profile-container__profile"
        src={Profile}
        alt="profile"
      ></img>
    </div>
  );
};
export default HeaderProfileMobile;
