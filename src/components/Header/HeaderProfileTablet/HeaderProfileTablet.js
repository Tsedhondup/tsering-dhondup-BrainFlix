import "./HeaderProfileTablet.scss";
import Profile from "../../../assets/images/Mohan-muruge.jpg";
let HeaderProfileTablet = () => {
  return (
    //  PROFILE-IMAGE
    <div className="header-tablet-profile-container">
      {/*  IMAGE-WRAPPER WAS CREATED TO MAKE LANDSCAPE IMAGE CICULAR  */}
      <div className="header-tablet-profile-container__img-wrapper">
        {/*  PROFILE-IMAGE */}
        <img
          className="header-tablet-profile-container__img-wrapper--img"
          src={Profile}
          alt="profile"
        />
      </div>
    </div>
    //---------------------------------------------//
    // <div className="header-tablet-profile-container">
    //   <img
    //     className="header-tablet-profile-container__profile"
    //     src={Profile}
    //     alt="profile"
    //   ></img>
    // </div>
  );
};

export default HeaderProfileTablet;
