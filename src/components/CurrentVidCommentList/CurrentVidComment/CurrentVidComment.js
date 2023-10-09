import "./CurrentVidComment.scss";
import CommentPhoto from "./CommentPhoto/CommentPhoto";
import CommentName from "./CommentName/CommentName";
import Commentdate from "./CommentDate/CommentDate";
import CommentBody from "./CommentBody/CommentBody";
import CommentMoment from "./CommentMoment/CommentMoment";

let CurrentVidComment = (props) => {
  const commentInfo = props.commentLists.map((video) => (
    <div className="current-video-comment-lists__comment" key={video.id}>
      {/* COMMENT-IMAGE-CONTAINER */}
      <div className="comment-img-container">
        <CommentPhoto />
      </div>
      {/* COMMENT-TEXT-CONTAINER */}
      <div className="comment-text-container">
        {/* COMMENT NAME & TEXT CONTAINER */}
        <div className="comment-text-container__name-date">
          <CommentName name={video.name} />
          <Commentdate currentVidDate={props.currentVidDate} />
        </div>
        <CommentBody comment={video.comment} />
        <CommentMoment moment={props.moment} />
      </div>
    </div>
  ));
  return <div>{commentInfo}</div>;
};
export default CurrentVidComment;
