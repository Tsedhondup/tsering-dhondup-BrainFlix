import { useState } from "react";
import data from "../../data/videos.json";
import NextVid from "../NextVid/NextVid";

let StateNextVid = (props) => {
  const [nextVideos, setNextVideos] = useState(data); // next-video list

  // SETTING NEXT-VIDEO-STATE
  const handleNextVideo = (event) => {
    // GET THE EVENT TARGET
    const eventTarget = event.target;
    // GET THE PARENT OF CLOSEST EVENT-TARGET WITH MATCHED-CLASS SELECTOR
    const eventParent = eventTarget.closest(".next-video");
    // GET THE ID OF CLOSEST PARENT
    const closestParentId = eventParent.id;
    // SETTING-NEXT-VIDEO STATE
    const filterVideoList = nextVideos.filter((nextVideo) => {
      return nextVideo.id !== closestParentId;
    });
    // INVOKING SET-NEXT-VIDEO FUNCTION
    setNextVideos(filterVideoList);
  };

  return (
    <NextVid
      nextVideos={nextVideos}
      setNextVideos={handleNextVideo}
      currentVideoId={props.currentVideoId}
    />
  );
};
export default StateNextVid;

/* FOR RESEARCH PURPOSES
  
  #WHEN RETURNING 
  /-------------------------------/
  THIS ONE NOT WORKING WHY?
  //     // <div>
  //     //   {nextVideos.map((video) => {
  //     //     <p>{video.title}</p>;
  //     //   })}
  //     // </div>
  /-------------------------------/
  THIS ONE WORKING 
  //     <div>
  //       {nextVideos.map((item) => (
  //         <NextVid nextVideo={item} />
  //       ))}
  //     </div>
  //   );
  */
