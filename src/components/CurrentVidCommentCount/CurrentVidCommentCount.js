import "./CurrentVidCommentCount.scss";
let CurrentVidCommentCount = (props) => {
  return (
    <p className="current-vid-info-container__total-comments">
      {props.totalComment} comments
    </p>
  );
};
export default CurrentVidCommentCount;
