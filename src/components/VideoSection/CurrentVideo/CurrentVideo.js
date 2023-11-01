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
      {/* 
    # WRAPPER LEVEL-1 : PURPOSES
    *
    * TO APPLIED APPROPRIATE WIDTH TO CURRENT-VIDEO SECTION TO MATCH THE MOCK UP
    * TO APPLIED PADDING LEFT AND RIGHT FOR SCREEN MIN-WIDTH:768PX & BEYOND
    * CONTAIN WRAPPER-LEVEL-0
    */}
      <div className="current-video-wrapper-level-1">
        {/* 
      # WRAPPER-LEVEL-0 : PURPOSES 
      *
      * TO CONTAIN VIDEO-ELEMENT
      * HAVE ASPECT RATIO OF 16:9 === WIDTH OF 16 UNITS & HEIGHT OF 9 UNITS 
      * TO CALCULATE HEIGHT OF BOX [] FOR ASPECT RATIO OF 16:9 = 
      * HEIGHT = HEIGHT/WIDTH = 9/16 === 0.5625 OR 56.25%
      *
      * SETTING HEIGHT OF CURRENT-WRAPPER-LEVEL-0
      * SET HEIGHT OF '0%'
      * SET PADDING-TOP OF 56.25% === 56.25% OF ITS TOTAL WIDTH WHICH IS SET TO 100%;
      * 56.25% PADDING-TOP ADDING TO ITS HEIGHT === MAKES TOTAL HEIGHT OF 56.25%
      */}
        <div className="current-video-wrapper-level-0">
          {/*
             VIDEO HAS ITS BOTH WIDTH AND HEIGHT SET TO 100% OF ITS CONTAINER(WRAPPER-LEVEL-0)
             WHICH HAS AN ASPECT RATIO OF 16:9*
            
           */}
          <video
            id={props.currentVideo.id}
            className="current-video-wrapper-level-0__video"
            poster={props.currentVideo.image}
            controls
            // src={props.currentVideo.video}
          ></video>
        </div>
      </div>
    </div>
  );
};
export default CurrentVideo;
