import "./Header.scss";
import HeaderLogo from "../Header/HeaderLogo/HeaderLogo";
import HeaderProfileTablet from "../Header/HeaderProfileTablet/HeaderProfileTablet";
import HeaderProfileMobile from "../Header/HeaderProfileMobile/HeaderProfileMobile";
import HeaderSearch from "../Header/HeaderSearch/HeaderSearch";
import HeaderUpload from "../Header/HeaderUpload/HeaderUpload";

let Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <HeaderLogo /> {/* BrainFlix Logo */}
        {/* SEARCH FIELD & MOBILE PROFILE CONTAINER */}
        <div className="header-search-mobile-profile-container">
          <HeaderSearch /> {/* search field */}
          <HeaderProfileMobile /> {/* mobile profile */}
        </div>
        <HeaderUpload /> {/* upload button */}
        <HeaderProfileTablet /> {/* tablet & desktop profile */}
      </div>
    </header>
  );
};
export default Header;
