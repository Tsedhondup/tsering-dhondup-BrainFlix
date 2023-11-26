import likeLogo from "../../../../../assets/images/likes.svg";
import "./CommentLike.scss";
import { useState } from "react";
import axios from "axios";
const CommentLike = ({ commentId, commentLikes }) => {
  const [likes, setLikes] = useState(commentLikes);
  // local URL
  const localURL = process.env.REACT_APP_URL;

  // HANDLE COMMENT LIKE
  const handleCommentLike = (commentId) => {
    axios
      .put(`${localURL}/comments/${commentId}/like`)
      .then((response) => {
        setLikes(response.data.likes);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="comment-like-container">
      <img
        className="comment-like-container__logo"
        src={likeLogo}
        alt="like logo"
        onClick={() => {
          handleCommentLike(commentId);
        }}
      />
      <span className="comment-like-container__count">{likes}</span>
    </div>
  );
};
export default CommentLike;
