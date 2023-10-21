// STYLE
import "./HeaderProfileMobile.scss";
// ASSET
import Profile from "../../../assets/images/Mohan-muruge.jpg";

const HeaderProfileMobile = () => {
  return (
    //  PROFILE-IMAGE
    <div className="header-mobile-profile-container">
      {/*  IMAGE-WRAPPER WAS CREATED TO MAKE LANDSCAPE IMAGE CICULAR  */}
      <div className="header-mobile-profile-container__img-wrapper">
        {/*  PROFILE-IMAGE */}
        <img
          className="header-mobile-profile-container__img-wrapper--img"
          src={Profile}
          alt="profile"
        />
      </div>
    </div>
  );
};
export default HeaderProfileMobile;
// {/*---------------------------------------------------------*/}
//   <div className="header-mobile-profile-container">
//     <img
//       className="header-mobile-profile-container__profile"
//       src={Profile}
//       alt="profile"
//     ></img>
//   </div>
