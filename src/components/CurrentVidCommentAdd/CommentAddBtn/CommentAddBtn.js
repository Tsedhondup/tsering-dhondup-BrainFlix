import "./CommentAddBtn.scss";
import addCommentIcon from "../../../assets/images/add_comment.svg";
let CommentAddBtn = () => {
  return (
    <div className="current-vid-comment-form-btn-container">
      <button className="current-vid-comment-form-btn-container__button">
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
