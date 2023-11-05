// STYLE
import "./CommentDelete.scss";
// ASSET
import deleteLogo from "../../../../../assets/images/icon-delete.svg";
import axios from "axios";

const CommentDelete = (props) => {
  const handleDeleteComment = () => {
    axios
      .delete(
        `${props.baseURL}/videos/${props.currentVidId}/comments/${props.commentId}?api_key=${props.myApiKey}`
      )
      .then((response) => {
        // GET THE ID OF RESPONSE COMMENT OBJECT
        const deleteCommentId = response.data.id;
        // FILTER OUT DELETE COMMENT FROM THE COMMENT-STATE VARIABLE
        const filteredComments = props.currentVidComments.filter((comment) => {
          return comment.id !== deleteCommentId;
        });
        // SET THE COMMENT STATE VARIABLE
        props.setCurrentVidComments(filteredComments);
        // SET THE COMMENT-COUNT STATE VARIABLE
        props.setCurrentVidCommentCounts(filteredComments.length);
      });
  };
  return (
    // BUTTON CONTAINER
    <div className="c">
      {/* ADD-COMMENT-LOGO */}
      <img
        className=""
        src={deleteLogo}
        alt="add-icon"
        onClick={handleDeleteComment}
      />
    </div>
  );
};
export default CommentDelete;
