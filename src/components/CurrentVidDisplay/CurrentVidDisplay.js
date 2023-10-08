import "./CurrentVidDisplay.scss";

// HANDLE CURRENT VIDEO
let CurrentVidDisplay = (props) => {
  // RENDERING
  return (
    <div className="current-video-container">
      <video
        id={props.currentVideo.id}
        className="current-video-container__video"
        poster={props.currentVideo.image}
        controls
      ></video>
    </div>
  );
};
export default CurrentVidDisplay;
