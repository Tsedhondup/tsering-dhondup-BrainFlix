import "./CommentDate.scss";
let Commentdate = (props) => {
  return (
    <p className="comment-text-container__name-date--date">
      {props.currentVidDate}
    </p>
  );
};
export default Commentdate;
