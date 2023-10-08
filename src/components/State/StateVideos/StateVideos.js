import { useState } from "react";
import dataDetail from "../../../data/video-details.json";
import dataPartial from "../../../data/videos.json";
import CurrentVid from "../../CurrentVidDisplay/CurrentVidDisplay";
// COMPONENTS
import NextVid from "../../NextVid/NextVid";
import CurrentVidInfo from "../../CurrentVidInfo/CurrentVidInfo";
// STYLES
import "./StateVideos.scss";

let StateVideos = () => {
  const [videos, setVideos] = useState([dataDetail, dataPartial]);

  /**** DATAS ****/

  // CURRENT-VIDEO OBJECT
  let currentVideo = videos[0][0];

  // FILTERED NEXT-VIDEO ARRAY
  let nextVideoFiltered = videos[1].filter((nextVideo) => {
    console.log("this is: " + nextVideo);
    return nextVideo.id !== currentVideo.id;
  });

  /*---------------------------------------------------------------------------*/

  /**** FUNCTIONS & EVENT HANDLERS ****/

  // UPDATE CURRENT-VIDEO OBJECT
  const updateCurrentVideo = (event) => {
    // GET THE EVENT TARGET
    const eventTarget = event.target;

    // GET THE PARENT OF CLOSEST EVENT-TARGET WITH MATCHED-CLASS SELECTOR
    const eventParent = eventTarget.closest(".next-video");

    // GET THE ID OF CLOSEST PARENT
    const closestParentId = eventParent.id;

    // UPDATE-CURRENT VIDEO
    currentVideo = dataDetail.filter((data) => {
      return data.id === closestParentId;
    });
    return currentVideo;
  };

  // NEXT-VIDEO-HANDLER
  const updateNextVideo = (event) => {
    // GET THE EVENT TARGET
    const eventTarget = event.target;

    // GET THE PARENT OF CLOSEST EVENT-TARGET WITH MATCHED-CLASS SELECTOR
    const eventParent = eventTarget.closest(".next-video");

    // GET THE ID OF CLOSEST PARENT
    const closestParentId = eventParent.id;

    nextVideoFiltered = dataPartial.filter((data) => {
      // RETURN OBJECT THAT DO NOT MATCHED CLOSEST-PARENT OR CLICKED VIDEO
      return data.id !== closestParentId;
    });
    return nextVideoFiltered;
  };

  // SET STATE-VIDEO COMPONENT HANDLER
  let setVideoHandler = (event) => {
    setVideos([updateCurrentVideo(event), updateNextVideo(event)]);
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
        {/* COMMENT- COUNT */}
        {/* NEXT-VIDEO-CONTAINER */}
        <div>
          {/* NEXT-VIDEO-LISTS */}
          <NextVid
            nextVideos={nextVideoFiltered}
            setVideoHandler={setVideoHandler}
          />
        </div>
      </div>
    </div>
  );
};
export default StateVideos;
