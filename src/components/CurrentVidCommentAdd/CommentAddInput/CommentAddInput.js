import "./CommentAddInput.scss";
let CommentAddInput = () => {
  return (
    <div className="current-vid-comment-form__input-container">
      <label
        className="current-vid-comment-form__input-container--abel"
        htmlFor="comment-input"
      >
        Join the conversation
      </label>
      <input
        className="current-vid-comment-form__input-container--input"
        id="comment-input"
        type="text"
        placeholder="Add a new comment"
      />
    </div>
  );
};
export default CommentAddInput;
