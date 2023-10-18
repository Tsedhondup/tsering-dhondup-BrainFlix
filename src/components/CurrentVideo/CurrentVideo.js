import "./CurrentVideo.scss";

// HANDLE CURRENT VIDEO
let CurrentVideo = (props) => {
  // RENDERING
  return (
    /* 
    # WRAPPER LEVEL-2 : PURPOSES
    *
    * TO HAVE 100% WIDTH RELATIVE TO VIEW-PORT
    * TO CONTAIN WRAPPER-LEVEL-1
    * HAS BACKGROUND OF 'BRAIN-FLIX-DARK-BLACK' 
    */
    <div className="current-video-wrapper-level-2">
      {/* 
    # WRAPPER LEVEL-1 : PURPOSES
    *
    * TO APPLIED APPROPRIATE WIDTH CURRENT-VIDEO SECTION TO MATCH THE MOCK UP
    * TO APPLIED PADDING LEFT AND RIGHT FOR SCREEN MIN-WIDTH:768PX
    */}
      <div className="current-video-wrapper-level-1">
        {/* 
      # WRAPPER-LEVEL-0 : PURPOSES 
      *
      * TO CONTAIN VIDEO-ELEMENT
      * HAVE ASPECT RATIO OF 16:9 === WIDTH OF 16 UNITS & HEIGHT OF 9 UNITS 
      * TO CALCULATE HEIGHT FOR ASPECT RATIO 16:9 = 9/16 === 0.5625 / 56.25%
      *
      * CURRENT-VIDEO-WRAPPER-LEVEL-0 HAS HEIGHT OF '0 / 0%'
      * INSTEAD IT HAS PADDING-TOP OF 56.25% === 56.25% OF ITS TOTAL WIDTH WHICH IS SET TO 100%;
      * 56.25% PADDING-TOP ADDING TO ITS HEIGHT === MAKES TOTAL HEIGHT OF 56.25%
      */}
        <div className="current-video-wrapper-level-0">
          {/*
           * VIDEO HAS ITS BOTH HEIGHT AND WIDHT SET TO 100% OF ITS CONTAINER === WRAPPER-LEVEL-0
           */}
          <video
            id={props.currentVideo.id}
            className="current-video-wrapper-level-0__video"
            poster={props.currentVideo.image}
            controls
          ></video>
        </div>
      </div>
    </div>
  );
};
export default CurrentVideo;
