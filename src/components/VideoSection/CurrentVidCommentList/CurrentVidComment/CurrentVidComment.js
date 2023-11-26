// STYLES
import "./CurrentVidComment.scss";

// COMPONENTS
import CommentImage from "./CommentImage/CommentImage";
import CommentName from "./CommentName/CommentName";
import Commentdate from "./CommentDate/CommentDate";
import CommentBody from "./CommentBody/CommentBody";
import CommentMoment from "./CommentMoment/CommentMoment";
import CommentLike from "./CommentLike/CommentLike";
import CommentDelete from "./CommentDelete/CommentDelete";

const CurrentVidComment = (props) => {
  // REVERSE COMMENT ARRAY
  const reversedCommentArray = props.currentVidComments.toReversed();
  const comments = reversedCommentArray.map((comment) => (
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
        <div className="comment-text-container__like-delete-container">
          <CommentLike commentId={comment.id} commentLikes={comment.likes} />
          <CommentDelete
            commentId={comment.id}
            currentVidComments={props.currentVidComments}
            setCurrentVidComments={props.setCurrentVidComments}
            currentVidCommentCounts={props.currentVidCommentCounts}
            setCurrentVidCommentCounts={props.setCurrentVidCommentCounts}
            currentVidId={props.currentVidId}
            myApiKey={props.myApiKey}
            baseURL={props.baseURL}
          />
        </div>
      </div>
    </div>
  ));
  return <div>{comments}</div>;
};
export default CurrentVidComment;
