import "./CurrentVidViews.scss";
import ViewLogo from "../../../assets/images/views.svg";
let CurrentVidViews = (props) => {
  return (
    <p className="current-vid-views-and-likes-container__views">
      <img
        className="current-vid-views-and-likes-container__views--logo"
        src={ViewLogo}
        alt="views-logo"
      />
      <span className="current-vid-views-and-likes-container__views--number">
        {props.views}
      </span>
    </p>
  );
};
export default CurrentVidViews;
