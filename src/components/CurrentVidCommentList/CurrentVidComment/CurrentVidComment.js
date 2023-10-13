import "./CurrentVidComment.scss";
import CommentPhoto from "./CommentPhoto/CommentPhoto";
import CommentName from "./CommentName/CommentName";
import Commentdate from "./CommentDate/CommentDate";
import CommentBody from "./CommentBody/CommentBody";
import CommentMoment from "./CommentMoment/CommentMoment";

let CurrentVidComment = (props) => {
  const comments = props.currentVideo.comments.map((comment) => (
    <div
      className="current-video-comment-lists-container__list"
      key={comment.id}
    >
      {/* COMMENT-IMAGE */}
      <CommentPhoto />
      {/* COMMENT-TEXT-CONTAINER */}
      <div className="comment-text-container">
        {/* COMMENT NAME & TEXT CONTAINER */}
        <div className="comment-text-container__name-date-container">
          <CommentName name={comment.name} />
          <Commentdate timestamp={comment.timestamp} />
        </div>
        <CommentBody commentBody={comment.comment} />
        <CommentMoment timestamp={comment.timestamp} />
      </div>
    </div>
  ));
  return <div>{comments}</div>;
};
export default CurrentVidComment;
