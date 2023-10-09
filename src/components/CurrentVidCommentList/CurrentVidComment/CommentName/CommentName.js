import "./CommentName.scss";
let CommentName = (props) => {
  return (
    <p className="comment-text-container__name-date--name">{props.name}</p>
  );
};
export default CommentName;
