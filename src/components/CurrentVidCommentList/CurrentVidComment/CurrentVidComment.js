import "./CurrentVidComment.scss";
import CommentPhoto from "./CommentPhoto/CommentPhoto";
import CommentName from "./CommentName/CommentName";
import Commentdate from "./CommentDate/CommentDate";
import CommentBody from "./CommentBody/CommentBody";
import CommentMoment from "./CommentMoment/CommentMoment";

let CurrentVidComment = (props) => {
  const comments = props.currentVideo.comments.map((comment) => (
    <div className="current-video-comment-lists__comment" key={comment.id}>
      {/* COMMENT-IMAGE-CONTAINER */}
      <div className="comment-img-container">
        <CommentPhoto />
      </div>
      {/* COMMENT-TEXT-CONTAINER */}
      <div className="comment-text-container">
        {/* COMMENT NAME & TEXT CONTAINER */}
        <div className="comment-text-container__name-date">
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
