import "./CurrentVidViews.scss";
let CurrentVidViews = (props) => {
  return (
    <p className="current-vid-views-and-likes-container__views">
      {props.views}
    </p>
  );
};
export default CurrentVidViews;
