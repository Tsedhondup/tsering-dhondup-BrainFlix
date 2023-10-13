import "./CommentAddInput.scss";
let CommentAddInput = () => {
  return (
    <div className="current-vid-comment-form-input-container">
      <label
        className="current-vid-comment-form-input-container__label"
        htmlFor="comment-input"
      >
        Join the conversation
      </label>
      <textarea
        className="current-vid-comment-form-input-container__input"
        id="comment-input"
        type="text"
        placeholder="Add a new comment"
      />
    </div>
  );
};
export default CommentAddInput;
