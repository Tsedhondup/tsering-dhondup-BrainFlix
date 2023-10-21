// STYLES
import "./CurrentVidLikes.scss";
// ASSETS
import LikeLogo from "../../../assets/images/likes.svg";

const CurrentVidLikes = (props) => {
  return (
    <p className="current-vid-views-and-likes-container__likes">
      {/* LIKE-LOGO */}
      <img
        className="current-vid-views-and-likes-container__likes--logo"
        src={LikeLogo}
        alt="views-logo"
      />
      {/* LIKES COUNT */}
      <span className="current-vid-views-and-likes-container__likes--number">
        {props.likes}
      </span>
    </p>
  );
};
export default CurrentVidLikes;
