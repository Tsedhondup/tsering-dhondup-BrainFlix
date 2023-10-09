import "./CommentAddInput.scss";
let CommentAddInput = () => {
  return (
    <div>
      <label htmlFor="comment-input">Join the conversation </label>
      <input id="comment-input" type="text" placeholder="Add a new comment" />
    </div>
  );
};
export default CommentAddInput;
