import "./CommentAddInput.scss";
let CommentAddInput = () => {
  return (
    <div className="current-vid-input-and-btn-container__input-container">
      <textarea
        className="current-vid-input-and-btn-container__input-container--input"
        id="comment-input"
        type="text"
        placeholder="Add a new comment"
      />
    </div>
  );
};
export default CommentAddInput;
