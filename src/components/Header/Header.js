import "./Header.scss";
import HeaderLogo from "../Header/HeaderLogo/HeaderLogo";
import HeaderProfileTablet from "../Header/HeaderProfileTablet/HeaderProfileTablet";
import HeaderProfileMobile from "../Header/HeaderProfileMobile/HeaderProfileMobile";
import HeaderSearch from "../Header/HeaderSearch/HeaderSearch";
import HeaderUpload from "../Header/HeaderUpload/HeaderUpload";

const Header = () => {
  return (
    <header className="header">
      {/* HEADER-CONTENT */}
      <div className="header__content">
        <HeaderLogo /> {/* BrainFlix Logo */}
        {/* HEADER-SEARCH & MOBILE-PROFILE COMPONENT */}
        <div className="header-search-and-mobile-profile-container">
          <HeaderSearch /> {/* search form */}
          <HeaderProfileMobile /> {/* mobile profile */}
        </div>
        <HeaderUpload /> {/* upload button */}
        <HeaderProfileTablet /> {/* tablet & desktop profile */}
      </div>
    </header>
  );
};
export default Header;
