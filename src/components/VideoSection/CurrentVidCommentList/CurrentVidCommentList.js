import "./CurrentVidCommentList.scss";
import CurrentVidComment from "./CurrentVidComment/CurrentVidComment";
const CurrentVidCommentList = (props) => {
  return (
    <div className="current-video-comment-lists-container">
      {/* CURRENT-VIDEO COMMENT-LISTS */}
      <CurrentVidComment
        currentVidComments={props.currentVidComments}
        setCurrentVidComments={props.setCurrentVidComments}
        currentVidCommentCounts={props.currentVidCommentCounts}
        setCurrentVidCommentCounts={props.setCurrentVidCommentCounts}
        currentVidId={props.currentVidId}
        myApiKey={props.myApiKey}
        baseURL={props.baseURL}
      />
    </div>
  );
};
export default CurrentVidCommentList;
