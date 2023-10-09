import "./CurrentVidDisplay.scss";

// HANDLE CURRENT VIDEO
let CurrentVidDisplay = (props) => {
  // RENDERING
  return (
    <div className="video-section__current-video-container">
      <video
        id={props.currentVideo.id}
        className="video-section__current-video-container--video"
        poster={props.currentVideo.image}
        controls
      ></video>
    </div>
  );
};
export default CurrentVidDisplay;
