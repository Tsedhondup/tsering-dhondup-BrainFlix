import "./CommentAddInput.scss";
let CommentAddInput = () => {
  return (
    <div className="current-vid-input-and-btn-container__input-container">
      {/* INPUT FOR SCREEN MIN-WIDTH:320PX / MOBILE*/}

      <textarea
        className="current-vid-input-and-btn-container__input-container--input-mobile"
        id="comment-input"
        type="text"
        placeholder="Add a new comment"
      />
      {/* INPUT FOR SCREEN MIN-WIDTH:768PX AND BEYOND  */}
      <input
        className="current-vid-input-and-btn-container__input-container--input-tablet"
        type="text"
        placeholder="Add a new comment"
      ></input>
    </div>
  );
};
export default CommentAddInput;
