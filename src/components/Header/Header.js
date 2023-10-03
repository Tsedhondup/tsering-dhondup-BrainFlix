import "./Header.scss";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderProfileTablet from "../HeaderProfileTablet/HeaderProfileTablet";
import HeaderProfileMobile from "../HeaderProfileMobile/HeaderProfileMobile";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import HeaderUpload from "../HeaderUpload/HeaderUpload";

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
