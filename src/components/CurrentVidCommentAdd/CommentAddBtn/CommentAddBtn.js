import "./CommentAddBtn.scss";
import addCommentIcon from "../../../assets/images/add_comment.svg";
let CommentAddBtn = () => {
  return (
    <div className="add-button-container">
      <button>
        <img src={addCommentIcon} alt="add-comment-icon" />
        comment
      </button>
    </div>
  );
};
export default CommentAddBtn;
