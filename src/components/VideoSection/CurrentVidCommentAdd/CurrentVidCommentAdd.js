// STYLES
import "./CurrentVidCommentAdd.scss";
// COMPONENTS
import CommentAddImage from "./CommentAddImage/CommentAddImage";
import CommentAddInput from "./CommentAddInput/CommentAddInput";
import CommentAddBtn from "./CommentAddBtn/CommentAddBtn";

const CurrentVidCommentAdd = (props) => {
  // PREVENT COMMENT FORM FROM SUBMISSION
  const commentSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form
      className="current-vid-comment-form"
      onClick={(event) => {
        commentSubmitHandler(event); // prevents comment-form submission
      }}
    >
      {/* COMMENT-IMAGE */}
      <CommentAddImage />
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
