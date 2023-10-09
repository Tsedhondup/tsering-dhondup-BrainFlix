import "./CommentAddBtn.scss";
import addCommentIcon from "../../../assets/images/add_comment.svg";
let CommentAddBtn = () => {
  return (
    <div className="current-vid-comment-form__btn-container">
      <button>
        <img
          src={addCommentIcon}
          alt="current-vid-comment-form__btn-container--icon"
        />
        comment
      </button>
    </div>
  );
};
export default CommentAddBtn;
