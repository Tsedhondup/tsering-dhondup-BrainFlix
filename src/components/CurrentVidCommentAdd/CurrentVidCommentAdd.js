import "./CurrentVidCommentAdd.scss";
import CommentAddPhoto from "./CommentAddPhoto/CommentAddPhoto";
import CommentAddInput from "./CommentAddInput/CommentAddInput";
import CommentAddBtn from "./CommentAddBtn/CommentAddBtn";
let CurrentVidCommentAdd = (props) => {
  return (
    <form
      onClick={(event) => {
        props.preventCommentSubmit(event);
      }}
    >
      <CommentAddPhoto />
      <CommentAddInput />
      <CommentAddBtn />
    </form>
  );
};
export default CurrentVidCommentAdd;
