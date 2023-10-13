import "./CurrentVidCommentList.scss";
import CurrentVidComment from "./CurrentVidComment/CurrentVidComment";
let CurrentVidCommentList = (props) => {
  return (
    <div className="current-video-comment-lists-container">
      <CurrentVidComment currentVideo={props.currentVideo} />
    </div>
  );
};
export default CurrentVidCommentList;
