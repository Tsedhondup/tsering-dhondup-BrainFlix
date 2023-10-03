import "./HeaderProfileMobile.scss";
import Profile from "../../../assets/images/Mohan-muruge.jpg";
let HeaderProfileMobile = () => {
  return (
    <img className="header__profile-mobile" src={Profile} alt="profile"></img>
  );
};
export default HeaderProfileMobile;
