import "./CurrentVidComment.scss";
import CommentPhoto from "./CommentPhoto/CommentPhoto";
import CommentName from "./CommentName/CommentName";
import Commentdate from "./CommentDate/CommentDate";
import CommentBody from "./CommentBody/CommentBody";

let CurrentVidComment = (props) => {
  const commentInfo = props.commentLists.map((video) => (
    <div key={video.id} className="current-video-comment">
      <CommentPhoto />
      <CommentName name={video.name} />
      <Commentdate currentVidDate={props.currentVidDate} />
      <CommentBody comment={video.comment} />
    </div>
  ));
  return <div>{commentInfo}</div>;
};
export default CurrentVidComment;
