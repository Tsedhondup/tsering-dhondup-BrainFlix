import "./CurrentVid.scss";

let CurrentVid = (props) => {
  return (
    <div className="current-video-container">
      <video
        className="current-video-container__video"
        poster={props.currentVideo.image}
        controls
      ></video>
    </div>
  );
};
export default CurrentVid;
