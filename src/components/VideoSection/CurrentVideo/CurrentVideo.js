import "./CurrentVideo.scss";

let CurrentVideo = (props) => {
  return (
    /* 
    # WRAPPER LEVEL-2 : PURPOSES
    *
    * HAS WIDTH OF 100% OF VIEW-PORT
    * HAS BACKGROUND OF 'BRAIN-FLIX-DARK-BLACK' 
    * CONTAIN WRAPPER-LEVEL-1
    */
    <div className="current-video-wrapper-level-2">
      <div className="current-video-wrapper-level-1">
        <div className="current-video-wrapper-level-0">
          <video
            id={props.currentVideo.id}
            className="current-video-wrapper-level-0__video"
            poster={props.currentVideo.image}
            controls
            autoPlay
            src="https://project-2-api.herokuapp.com/stream?api_key=84e96018-4022-434e-80bf-000ce4cd12b8"
          ></video>
        </div>
      </div>
    </div>
  );
};
export default CurrentVideo;
