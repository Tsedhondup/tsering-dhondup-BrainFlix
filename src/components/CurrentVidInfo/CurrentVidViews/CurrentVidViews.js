// STYLES
import "./CurrentVidViews.scss";
// ASSETS
import ViewLogo from "../../../assets/images/views.svg";

const CurrentVidViews = (props) => {
  return (
    <p className="current-vid-views-and-likes-container__views">
      {/* VIEW LOGO */}
      <img
        className="current-vid-views-and-likes-container__views--logo"
        src={ViewLogo}
        alt="views-logo"
      />
      {/* VIEW-COUNT */}
      <span className="current-vid-views-and-likes-container__views--number">
        {props.views}
      </span>
    </p>
  );
};
export default CurrentVidViews;
