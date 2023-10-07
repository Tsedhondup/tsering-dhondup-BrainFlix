import { useState } from "react";
import data from "../../data/videos.json";

import NextVidTitle from "../NextVid/NextVidTitle/NextVidTitle";
import NextVidChannel from "../NextVid/NextVidChannel/NextVidChannel";
import NextVidThumbnail from "../NextVid/NextVidThumbnail/NextVidThumbnail";

let StateNextVid = () => {
  const [nextVideos, StateNextVideo] = useState(data); // next-video list
  const list = nextVideos.map((vidObj) => (
    <div key={vidObj.id}>
      <NextVidTitle title={vidObj.title} />
      <NextVidChannel channel={vidObj.channel} />
      <NextVidThumbnail image={vidObj.image} />
    </div>
  ));
  return (
    <div>
      <div>
        <h2>Next videos</h2>
      </div>
      {list}
    </div>
  );
  /* FOR RESEARCH PURPOSES
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
};
export default StateNextVid;
