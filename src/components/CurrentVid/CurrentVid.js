import "./CurrentVid.scss";

// HANDLE CURRENT VIDEO
let CurrentVid = (props) => {
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
export default CurrentVid;
