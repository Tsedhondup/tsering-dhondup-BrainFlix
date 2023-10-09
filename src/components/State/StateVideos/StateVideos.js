import { useState } from "react";
// DATAS
import dataDetail from "../../../data/video-details.json";
import dataPartial from "../../../data/videos.json";
// COMPONENTS
import CurrentVidDisplay from "../../CurrentVidDisplay/CurrentVidDisplay";
import NextVid from "../../NextVid/NextVid";
import CurrentVidCommentCount from "../../CurrentVidCommentCount/CurrentVidCommentCount";
import CurrentVidCommentAdd from "../../CurrentVidCommentAdd/CurrentVidCommentAdd";
import CurrentVidInfo from "../../CurrentVidInfo/CurrentVidInfo";
import CurrentVidCommentList from "../../CurrentVidCommentList/CurrentVidCommentList";
// STYLES
import "./StateVideos.scss";

let StateVideos = () => {
  // ROOT-STATE OF THE COMPONENT
  const [videos, setVideos] = useState([dataDetail, dataPartial]);

  /************************* DATAS *************************/

  // CURRENT-VIDEO OBJECT
  let currentVideo = videos[0][0];

  // FILTERED NEXT-VIDEO ARRAY
  let nextVideoFiltered = videos[1].filter((nextVideo) => {
    return nextVideo.id !== currentVideo.id;
  });

  // CURRENT-VIDEO-DATE
  let currentVidDate = new Date(currentVideo.timestamp).toLocaleDateString();

  /************************* UTILITY FUNCTION ************************/

  // VARIABLE TO STORE MOMENT - TIME ELAPSED SINCE THE COMMENT WAS ADDED
  let moment;
  let getMoment = () => {
    // GETTING TIME DIFFERENCE AND STORE THE DIFFERENCE IN MILLI-SECONDS
    let timeDifference = new Date().getTime() - currentVideo.timestamp;

    /*
         # CONVERTING TIME-DIFFERENCES (IN MILLI-SECONDS) INTO DIFFERENT UNITS OF TIME 
         - EACH UNIT OF TIME INDICATES TOTAL TIME ELAPSED SINCE THE VIDEO WAS ADDED 
 
         - e.g : 'secDiffs' VARIABLE INDICATES THE TOTAL SECONDS ELAPSED SINCE THE VIDEO WAS ADDED 
          */
    let secDiffs = timeDifference / 1000; // second
    let minDiffs = secDiffs / 60; // minute
    let hourDiffs = minDiffs / 60; // hour
    let dayDiffs = hourDiffs / 24; // day
    let weekDiffs = dayDiffs / 7; // week
    let monthDiffs = weekDiffs * 0.23; // month
    let yearDiffs = monthDiffs / 12; // year

    // TOTAL MILLI-SECONDS IN GIVEN UNITS OF TIME
    let secMilli = 1000; // 1 second
    let minMilli = 60000; // 1 minute
    let hourMilli = 3600000; // 1 hour
    let dayMilli = 86400000; // 1 day
    let weekMilli = 604800000; // 1 week
    let monthMilli = 2592000000; // 1 month
    let yearMilli = 31536000000; // 1 year

    // VARIBLE TO STORE TOTAL TIME ELAPSED SINCE THE COMMENT WAS ADDED

    /* 
          # RENDERING APPRORIATE TIME INTO DOM BASED ON TOTAL MILLI-SECONDS IN TIME-DIFFERENCE 
          WITH RESPECTIVE TO TOTAL MILLI-SECONDS IN A GIVEN UNIT OF TIME 
         */

    // MILLI-SECONDS*
    if (timeDifference < secMilli) {
      moment = "0s";
    }
    // SECONDS*
    if (timeDifference >= secMilli && timeDifference < minMilli) {
      moment = `${Math.round(secDiffs)}s ago`;
    }
    // MINUTES*
    if (timeDifference >= minMilli && timeDifference < hourMilli) {
      moment =
        timeDifference >= 2 * minMilli
          ? `${Math.round(minDiffs)} mins ago`
          : `${Math.round(minDiffs)} min ago`;
    }
    // HOURS*
    if (timeDifference >= hourMilli && timeDifference < dayMilli) {
      moment =
        timeDifference >= 2 * hourMilli
          ? `${Math.round(hourDiffs)} hrs ago`
          : `${Math.round(hourDiffs)} hr ago`;
    }
    // DAYS*
    if (timeDifference >= dayMilli && timeDifference < weekMilli) {
      moment =
        timeDifference >= 2 * dayMilli
          ? `${Math.round(dayDiffs)} days ago`
          : `${Math.round(dayDiffs)} day ago`;
    }
    // WEEKS*
    if (timeDifference >= weekMilli && timeDifference < monthMilli) {
      moment =
        timeDifference >= 2 * dayMilli
          ? `${Math.round(dayDiffs)} wks ago`
          : `${Math.round(dayDiffs)} wk ago`;
    }
    // MONTHS*
    if (timeDifference >= monthMilli && timeDifference < yearMilli) {
      moment =
        timeDifference >= 2 * monthMilli
          ? `${Math.round(monthDiffs)} mths ago`
          : `${Math.round(monthDiffs)} mth ago`;
    }
    // YEARS*
    if (timeDifference >= yearMilli) {
      moment =
        timeDifference >= 2 * yearMilli
          ? `${Math.floor(yearDiffs)} yrs ago`
          : `${Math.floor(yearDiffs)} yr ago`;
    }
  };
  // INVOKED GET-MOMENT FUNCTION
  getMoment();

  /************************* EVENT HANDLERS ************************/

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

  /*---------------------------------------------------------------------------*/

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

  /*---------------------------------------------------------------------------*/

  // SET STATE-VIDEO COMPONENT HANDLER
  let setVideoHandler = (event) => {
    setVideos([updateCurrentVideo(event), updateNextVideo(event)]);
  };

  /*---------------------------------------------------------------------------*/

  // RENDERING
  return (
    <section className="video-section">
      {/* (1) - CURRENT-VIDEO-DISPLAY CONTAINER */}
      <div className="video-section__current-vid" id={currentVideo.id}>
        <CurrentVidDisplay currentVideo={currentVideo} /> {/* CURRENT-VIDEO */}
      </div>

      {/*-----------------------------------------------------------*/}

      {/* (2) - CURRENT-VIDEO-INFO & NEXT-VIDEO CONTAINER */}
      <div className="current-vid-info-next-vid-container">
        {/*-------------------------------------*/}
        {/* CURRENT-VIDEO-INFO && COMMENTS-CONTAINER */}
        <div className="current-vid-info-and-comments-container">
          <div className="current-vid-info-cnontainer">
            {/* CURRENT-VIDEO-INFO */}
            <CurrentVidInfo
              currentVideo={currentVideo}
              date={currentVidDate}
              moment={moment}
            />
          </div>
          {/* COMMENT-COUNT */}
          <CurrentVidCommentCount currentVideo={currentVideo} />
          {/* COMMENT-ADD */}
          <CurrentVidCommentAdd currentVideo={currentVideo} />
          {/* COMMENT-LIST */}
          <CurrentVidCommentList currentVideo={currentVideo} />
        </div>
        {/*-------------------------------------*/}
        {/* NEXT-VIDEO-CONTAINER */}
        <div className="next-video-container">
          {/*
            # NEXT-VIDEO-LISTS 
          - CURRENT-VIDEO-ID IS ALSO PASSED
          - REASON - TO DIRECT OR FOCUS PAGE TO CURRENT-VIDEO DISPLAY WHEN
          CLICKED ON NEXT-VIDEO LIST
          */}
          <NextVid
            nextVideos={nextVideoFiltered}
            setVideoHandler={setVideoHandler}
            currentVideoId={currentVideo.id}
          />
        </div>
        {/*-------------------------------------*/}
      </div>
    </section>
  );
};
export default StateVideos;
