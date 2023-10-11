import NextVidHeader from "./NextVidHeader/NextVidHeader";
import NextVidChannel from "./NextVidChannel/NextVidChannel";
import NextVidTitle from "./NextVidTitle/NextVidTitle";
import NextVidImage from "./NextVidImagel/NextVidImage";

let NextVid = (props) => {
  
  // STATE-VIDEO HANDLER
  const setVideoHandler = () => {

  };
  // CREATING THE NEXT-VDIEO LIST
  const list = props.nextVideos.map((vidObj) => (
    // NEXT-VIDEO-ITEM
    <div
      className="next-video-container__next-video"
      id={vidObj.id}
      key={vidObj.id}
      onClick={(event) => {
        props.setVideoHandler(event);
      }}
    >
      <div className="next-video-img-container">
        <NextVidImage image={vidObj.image} />
      </div>
      <div className="next-video-text-container">
        <NextVidTitle title={vidObj.title} />
        <NextVidChannel channel={vidObj.channel} />
      </div>
    </div>
  ));
  return (
    <div className="next-video-container">
      <NextVidHeader />
      {list}
    </div>
  );
};

export default NextVid;
