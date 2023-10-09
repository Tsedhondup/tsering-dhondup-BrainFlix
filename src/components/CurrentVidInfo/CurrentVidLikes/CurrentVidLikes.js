import "./CurrentVidLikes.scss";
let CurrentVidLikes = (props) => {
  return (
    <p className="current-vid-views-and-likes-container__likes">
      {props.likes}
    </p>
  );
};
export default CurrentVidLikes;
