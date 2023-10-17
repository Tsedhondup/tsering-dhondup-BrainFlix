import "./NextVidThumbnail.scss";
let NextVidImage = (props) => {
  return (
    
    <img
      className="next-video__thumbnail-container--image"
      src={props.image}
      alt="img"
    ></img>
  );
};
export default NextVidImage;
