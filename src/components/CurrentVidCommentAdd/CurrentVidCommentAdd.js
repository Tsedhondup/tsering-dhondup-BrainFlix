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
      {/* INPUT FIELD & BUTTON CONTAINER  */}
      <div className="current-vid-comment-form__input-btn-container">
        <CommentAddInput />
        <CommentAddBtn />
      </div>
    </form>
  );
};
export default CurrentVidCommentAdd;
