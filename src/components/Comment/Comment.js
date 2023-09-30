import "./Comment.scss";
let Comment = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>this is first comment</p>
    </div>
  );
};
export default Comment;
