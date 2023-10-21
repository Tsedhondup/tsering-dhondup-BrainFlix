// STYLE
import "./HeaderLogo.scss";
// ASSET
import BrainFlixLogo from "../../../assets/images/BrainFlix-logo.svg";
const HeaderLogo = () => {
  return (
    <div className="header-logo-container">
      {/* BRAIN-FLIX LOGO */}
      <img
        className="header-logo-container__logo"
        src={BrainFlixLogo}
        alt="BrainFlix Logo"
      />
    </div>
  );
};
export default HeaderLogo;
