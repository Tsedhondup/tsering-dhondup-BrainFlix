import "./NextVidThumbnail.scss";
const NextVidThumbnail = (props) => {
  return (
    <img
      className="next-video__thumbnail-container--image"
      src={props.image}
      alt="img"
    ></img>
  );
};
export default NextVidThumbnail;
