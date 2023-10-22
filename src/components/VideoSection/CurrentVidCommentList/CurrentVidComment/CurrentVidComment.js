// STYLES
import "./CurrentVidComment.scss";
// COMPONENTS
import CommentImage from "./CommentImage/CommentImage";
import CommentName from "./CommentName/CommentName";
import Commentdate from "./CommentDate/CommentDate";
import CommentBody from "./CommentBody/CommentBody";
import CommentMoment from "./CommentMoment/CommentMoment";

const CurrentVidComment = (props) => {
  const comments = props.currentVideo.comments.map((comment) => (
    // COMMENT
    <div
      className="current-video-comment-lists-container__list"
      key={comment.id}
    >
      {/* COMMENT-IMAGE */}
      <CommentImage />
      {/* COMMENT-TEXT-CONTAINER */}
      <div className="comment-text-container">
        {/* COMMENT NAME & TEXT CONTAINER */}
        <div className="comment-text-container__name-date-container">
          <CommentName name={comment.name} />
          <Commentdate timestamp={comment.timestamp} />
        </div>
        {/* COMMENT-BODY */}
        <CommentBody commentBody={comment.comment} />
        {/* TIME ELAPSED SINCE COMMENT WAS ADDED */}
        <CommentMoment timestamp={comment.timestamp} />
      </div>
    </div>
  ));
  return <div>{comments}</div>;
};
export default CurrentVidComment;
