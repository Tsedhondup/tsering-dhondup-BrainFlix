import "./CurrentVidCommentList.scss";
import CurrentVidComment from "./CurrentVidComment/CurrentVidComment";
let CurrentVidCommentList = (props) => {
  return (
    <div className="current-video-comment-lists">
      <CurrentVidComment
        commentLists={props.currentVideo.comments}
        moment={props.moment}
      />
    </div>
  );
};
export default CurrentVidCommentList;
