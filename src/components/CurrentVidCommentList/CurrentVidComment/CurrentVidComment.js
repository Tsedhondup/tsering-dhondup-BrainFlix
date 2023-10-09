import "./CurrentVidComment.scss";
import CommentPhoto from "./CommentPhoto/CommentPhoto";
import CommentName from "./CommentName/CommentName";
import Commentdate from "./CommentDate/CommentDate";
import CommentBody from "./CommentBody/CommentBody";
import CommentMoment from "./CommentMoment/CommentMoment";

let CurrentVidComment = (props) => {
  const commentInfo = props.commentLists.map((video) => (
    <div key={video.id} className="current-video-comment">
      <CommentPhoto />
      <CommentName name={video.name} />
      <Commentdate currentVidDate={props.currentVidDate} />
      <CommentBody comment={video.comment} />
      <CommentMoment moment={props.moment} />
    </div>
  ));
  return <div>{commentInfo}</div>;
};
export default CurrentVidComment;
