import NextVidChannel from "./NextVidChannel/NextVidChannel";
import NextVidTitle from "./NextVidTitle/NextVidTitle";
import NextVidThumbnail from "./NextVidThumbnail/NextVidThumbnail";
import StateCurrentVid from "../State/StateCurrentVid";

let NextVid = (props) => {
  // GET THE ID OF CURRENT VIDEO
  const currentVideoId = props.currentVideoId;
  //   console.log(currentVideoId)

  // REMOVED THE CURRENT VIDEO FROM NEXT-VIDEOS LIST
  const filteredNextVideos = props.nextVideos.filter((vidObject) => {
    // if (!vidObject.id === currentVideoId) {
    return vidObject;
    // }
  });

  // CREATING THE NEXT-VDIEO LIST
  const list = filteredNextVideos.map((vidObj) => (
    // NEXT-VIDEO-ITEM
    <div
      className="next-video"
      id={vidObj.id}
      key={vidObj.id}
      onClick={(event) => {
        props.setNextVideos(event);
      }}
    >
      <NextVidTitle title={vidObj.title} />
      <NextVidChannel channel={vidObj.channel} />
      <NextVidThumbnail image={vidObj.image} />
    </div>
  ));
  return <div>{list}</div>;
};

export default NextVid;
