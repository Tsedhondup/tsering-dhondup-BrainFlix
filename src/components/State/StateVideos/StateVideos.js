import { useState } from "react";
import dataDetail from "../../../data/video-details.json";
import dataPartial from "../../../data/videos.json";
import CurrentVid from "../../CurrentVid/CurrentVid";
// COMPONENTS
import NextVid from "../../NextVid/NextVid";
import CurrentVidInfo from "../../CurrentVidInfo/CurrentVidInfo";

// STYLES
import "./StateVideos.scss";

let StateVideos = () => {
  const [videos, setVideos] = useState([dataDetail, dataPartial]);

  /* # DATAS */

  // CURRENT-VIDEO OBJECT
  let currentVideo = videos[0][0];

  // FILTERED NEXT-VIDEO ARRAY
  const nextVideoFiltered = videos[1].filter((nextVideo) => {
    return nextVideo.id !== currentVideo.id;
  });

  /*---------------------------------------------------------------------------*/

  /* FUNCTIONS & EVENT HANDLERS */

  // UPDATE CURRENT-VIDEO OBJECT
  const updateCurrentVideo = (videoId) => {
    const clickedVideo = dataDetail.filter((data) => {
      return data.id === videoId;
    });
    currentVideo = clickedVideo[0];
  };

  // NEXT-VIDEO-HANDLER
  const nextVideoHandler = (event) => {
    // GET THE EVENT TARGET
    const eventTarget = event.target;
    // GET THE PARENT OF CLOSEST EVENT-TARGET WITH MATCHED-CLASS SELECTOR
    const eventParent = eventTarget.closest(".next-video");
    // GET THE ID OF CLOSEST PARENT
    const closestParentId = eventParent.id;
    //INVOKE UPDATE-CURRENT-VIDEO FUNCTION
    updateCurrentVideo(closestParentId);

    // SET STATE OF NEXT-VIDEO LIST
  };

  // RENDERING
  return (
    <div className="video-container">
      {/* (1) - CURRENT-VIDEO-DISPLAY CONTAINER */}
      <div>
        {/* CURRENT-VIDEO-DISPLAY */}
        <CurrentVid currentVideo={currentVideo} />
      </div>
      {/*-----------------------------------------------------------*/}
      {/* (2) - CURRENT-VIDEO-INFO & NEXT-VIDEO CONTAINER */}
      <div className="current-info-next-vid">
        {/* CURRENT-VIDEO-INFO-CONTAINER */}
        <div>
          {/* CURRENT-VIDEO-INFO */}
          <CurrentVidInfo currentVideo={currentVideo} />
        </div>
        {/* NEXT-VIDEO-CONTAINER */}
        <div>
          {/* NEXT-VIDEO-LISTS */}
          <NextVid
            nextVideos={nextVideoFiltered}
            nextVideoHandler={nextVideoHandler}
          />
        </div>
      </div>
    </div>
  );
};
export default StateVideos;
