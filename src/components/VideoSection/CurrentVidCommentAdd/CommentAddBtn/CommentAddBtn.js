// STYLE
import "./CommentAddBtn.scss";
// ASSET
import addCommentIcon from "../../../../assets/images/add_comment.svg";

const CommentAddBtn = (props) => {
  return (
    // BUTTON CONTAINER
    <div className="current-vid-comment-form-btn-container">
      {/* BUTTON */}
      <button
        className="current-vid-comment-form-btn-container__button"
        type="submit"
        onClick={(event) => {
          event.stopPropagation();
          props.handleCommentSubmit(event);
        }}
      >
        {/* ADD-COMMENT-LOGO */}
        <img
          className="current-vid-comment-form-btn-container__button--icon"
          src={addCommentIcon}
          alt="add-icon"
        />
        comment
      </button>
    </div>
  );
};
export default CommentAddBtn;
