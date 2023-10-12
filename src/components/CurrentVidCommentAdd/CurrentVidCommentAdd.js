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
      <CommentAddInput />
      <CommentAddBtn />
    </form>
  );
};
export default CurrentVidCommentAdd;
