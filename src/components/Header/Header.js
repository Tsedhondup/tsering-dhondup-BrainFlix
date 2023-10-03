import "./Header.scss";
import HeaderLogo from "../Header/HeaderLogo/HeaderLogo";
import HeaderProfileTablet from "../Header/HeaderProfileTablet/HeaderProfileTablet";
import HeaderProfileMobile from "../Header/HeaderProfileMobile/HeaderProfileMobile";
import HeaderSearch from "../Header/HeaderSearch/HeaderSearch";
import HeaderUpload from "../Header/HeaderUpload/HeaderUpload";

let Header = () => {
  return (
    <header className="header">
      <HeaderLogo />
      <HeaderProfileMobile />
      <HeaderSearch />
      <HeaderUpload />
      <HeaderProfileTablet />
    </header>
  );
};
export default Header;
