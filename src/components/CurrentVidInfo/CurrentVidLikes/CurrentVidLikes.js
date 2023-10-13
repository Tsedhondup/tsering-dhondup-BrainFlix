import "./CurrentVidLikes.scss";
import LikeLogo from "../../../assets/images/likes.svg";
let CurrentVidLikes = (props) => {
  return (
    <p className="current-vid-views-and-likes-container__likes">
      <img
        className="current-vid-views-and-likes-container__likes--logo"
        src={LikeLogo}
        alt="views-logo"
      />
      <span className="current-vid-views-and-likes-container__likes--number">
        {props.likes}
      </span>{" "}
    </p>
  );
};
export default CurrentVidLikes;
