import "./CurrentVidCommentList.scss";
import CurrentVidComment from "./CurrentVidComment/CurrentVidComment";
const CurrentVidCommentList = (props) => {
  return (
    <div className="current-video-comment-lists-container">
      {/* CURRENT-VIDEO COMMENT-LISTS */}
      <CurrentVidComment currentVideo={props.currentVideo} />
    </div>
  );
};
export default CurrentVidCommentList;
