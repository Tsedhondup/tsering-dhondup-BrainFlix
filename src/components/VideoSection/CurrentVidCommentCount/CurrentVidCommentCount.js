import "./CurrentVidCommentCount.scss";

const CurrentVidCommentCount = (props) => {
  return (
    <p className="current-vid-info-container__total-comments">
      {props.totalComment} Comments
    </p>
  );
};
export default CurrentVidCommentCount;