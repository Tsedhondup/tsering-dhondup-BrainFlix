import "./CurrentVid.scss";
let CurrentVid = (props) => {
  return (
    <div className="current-video-container">
      <video
        className="current-video-container__video"
        poster={props.currentVideo.image}
        controls
        onClick={() => {
          props.currentVidHandler({
            image:
              "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Peter_Griffin.png/220px-Peter_Griffin.png",
          });
        }}
      ></video>
    </div>
  );
};
export default CurrentVid;
