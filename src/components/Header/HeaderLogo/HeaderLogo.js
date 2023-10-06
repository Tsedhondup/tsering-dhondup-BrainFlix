import "./HeaderLogo.scss";
import BrainFlixLogo from "../../../assets/images/BrainFlix-logo.svg";
let HeaderLogo = () => {
  return (
    <div className="header-logo-container">
      <img
        className="header-logo-container__logo"
        src={BrainFlixLogo}
        alt="BrainFlix Logo"
      />
    </div>
  );
};
export default HeaderLogo;
