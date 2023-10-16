import "./CurrentVidCommentAdd.scss";
import CommentAddPhoto from "./CommentAddPhoto/CommentAddPhoto";
import CommentAddInput from "./CommentAddInput/CommentAddInput";
import CommentAddBtn from "./CommentAddBtn/CommentAddBtn";
let CurrentVidCommentAdd = (props) => {
  // PREVENT COMMENT FORM FROM SUBMISSION
  let preventCommentSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form
      className="current-vid-comment-form"
      onClick={(event) => {
        preventCommentSubmit(event);
      }}
    >
      <CommentAddPhoto />
      {/* LABEL, INPUT & BUTTON CONTAINER */}
      <div className="current-vid-label-input-button-container">
        <p
          className="current-vid-label-input-button-container__label"
          htmlFor="comment-input"
        >
          Join the conversation
        </p>
        {/* INPUT FIELD & BUTTON CONTAINER  */}
        <div className="current-vid-input-and-btn-container">
          <CommentAddInput />
          <CommentAddBtn />
        </div>
      </div>
    </form>
  );
};
export default CurrentVidCommentAdd;
