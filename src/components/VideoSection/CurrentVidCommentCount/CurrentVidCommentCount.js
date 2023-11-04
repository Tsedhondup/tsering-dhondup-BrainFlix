import "./CurrentVidCommentCount.scss";

const CurrentVidCommentCount = (props) => {
  return (
    <p className="current-vid-info-container__total-comments">
      {props.currentVidCommentCounts} Comments
    </p>
  );
};
export default CurrentVidCommentCount;
