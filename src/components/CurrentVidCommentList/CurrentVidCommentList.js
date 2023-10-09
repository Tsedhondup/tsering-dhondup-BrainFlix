import "./CurrentVidCommentList.scss";
import CurrentVidComment from "./CurrentVidComment/CurrentVidComment";
let CurrentVidCommentList = (props) => {
  return (
    <CurrentVidComment
      commentLists={props.currentVideo.comments}
    />
  );
};
export default CurrentVidCommentList;
