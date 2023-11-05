import { NavLink } from "react-router-dom";
// STYLE
import "./HeaderLogo.scss";
// ASSET
import BrainFlixLogo from "../../../assets/images/BrainFlix-logo.svg";
const HeaderLogo = () => {
  return (
    <NavLink to="/">
      <div className="header-logo-container">
        {/* BRAIN-FLIX LOGO */}
        <img
          className="header-logo-container__logo"
          src={BrainFlixLogo}
          alt="BrainFlix Logo"
        />
      </div>
    </NavLink>
  );
};
export default HeaderLogo;
