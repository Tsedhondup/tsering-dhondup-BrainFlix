// STYLES
import "./CurrentVidLikes.scss";
// ASSETS
import LikeLogo from "../../../../assets/images/likes.svg";
import axios from "axios";
import { useState, useEffect } from "react";
const CurrentVidLikes = (props) => {
  const [currentVideoLikes, setCurrentVideoLikes] = useState("");
  // LOCAL URL
  const localURL = process.env.REACT_APP_URL;

  // GETTING CURRENT VIDEOS LIKES DYNAMICALLY
  useEffect(() => {
    axios
      .get(`${localURL}/videos/${props.currentVideo.id}`)
      .then((response) => {
        setCurrentVideoLikes(response.data.likes);
      });
  }, [localURL, props.currentVideo.id]);

  // EVENT HANDLERS
  const handleLikes = () => {
    axios
      .put(`${localURL}/videos/${props.currentVideo.id}/like`)
      .then((response) => {
        setCurrentVideoLikes(response.data.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <p className="current-vid-views-and-likes-container__likes">
      {/* LIKE-LOGO */}
      <img
        className="current-vid-views-and-likes-container__likes--logo"
        src={LikeLogo}
        alt="views-logo"
        onClick={(event) => {
          event.stopPropagation();
          handleLikes();
        }}
      />
      {/* LIKES COUNT */}
      <span className="current-vid-views-and-likes-container__likes--number">
        {currentVideoLikes}
      </span>
    </p>
  );
};
export default CurrentVidLikes;
