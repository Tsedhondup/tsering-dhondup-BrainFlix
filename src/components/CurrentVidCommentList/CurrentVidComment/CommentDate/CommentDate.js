import "./CommentDate.scss";
let Commentdate = (props) => {
  const commentDate = new Date(props.timestamp).toLocaleDateString();

  return (
    <p className="comment-text-container__name-date--date">{commentDate}</p>
  );
};
export default Commentdate;
