// STYLES
import "./CurrentVidLikes.scss";
// ASSETS
import LikeLogo from "../../../../assets/images/likes.svg";
import { round } from "lodash";

const CurrentVidLikes = (props) => {
  return (
    <p className="current-vid-views-and-likes-container__likes">
      {/* LIKE-LOGO */}
      <img
        className="current-vid-views-and-likes-container__likes--logo"
        src={LikeLogo}
        alt="views-logo"
        onClick={(event) => {
          event.stopPropagation();
          props.handleLikes();
        }}
      />
      {/* LIKES COUNT */}
      <span className="current-vid-views-and-likes-container__likes--number">
        {props.likes}
      </span>
    </p>
  );
};
export default CurrentVidLikes;
