import "./NextVidImage.scss";
let NextVidImage = (props) => {
  return (
    <img
      className="next-video-img-container__image"
      src={props.image}
      alt="img"
    ></img>
  );
};
export default NextVidImage;