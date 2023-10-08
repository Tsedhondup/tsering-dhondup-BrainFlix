import NextVidChannel from "./NextVidChannel/NextVidChannel";
import NextVidTitle from "./NextVidTitle/NextVidTitle";
import NextVidThumbnail from "./NextVidThumbnail/NextVidThumbnail";

let NextVid = (props) => {
  // CREATING THE NEXT-VDIEO LIST
  const list = props.nextVideos.map((vidObj) => (
    // NEXT-VIDEO-ITEM
    <div
      className="next-video"
      id={vidObj.id}
      key={vidObj.id}
      onClick={(event) => {
        props.nextVideoHandler(event);
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
