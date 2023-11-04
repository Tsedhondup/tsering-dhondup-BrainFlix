// HOOKS
import { useRef, useState } from "react";
// STYLES
import "./CurrentVidCommentAdd.scss";
// COMPONENTS
import CommentAddImage from "./CommentAddImage/CommentAddImage";
import CommentAddInput from "./CommentAddInput/CommentAddInput";
import CommentAddBtn from "./CommentAddBtn/CommentAddBtn";
import axios from "axios";

const CurrentVidCommentAdd = (props) => {
  const [commentValue, setCommentValue] = useState("");
  const [warningMsgClass, setWarningMsgClass] = useState("");
  const [pinkBorderClass, setPinkBorderClass] = useState("");

  // POSTING COMMENTS
  const postComments = () => {
    // CREAT COMMENT OBJECT
    const commentObject = {
      comment: commentValue,
      name: "tsering Dhondup",
    };

    // POST REQUEST
    // URL, API, CURRENT-VID ID , COMMENT-STATE VARIABLE, COMMENTS-COUNT STATE VARIABLE
    axios
      .post(
        `${props.baseURL}/videos/${props.currentVidId}/comments?api_key=${props.myApiKey}`,
        commentObject
      )
      .then((response) => {
        // extract the comments from comment state variable
        const newComments = [...props.currentVidComments];
        // push response data object to newComments array
        newComments.push(response.data);
        // // set the comment state variable
        props.setCurrentVidComments(newComments);
        // // set the commentCount state
        props.setCurrentVidCommentCounts(newComments.length);
      });
  };
  // HANDLE COMMENT SUBMIT
  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (!commentValue) {
      handleCommentValues(event);
      handleCommentValidation(event);
    } else {
      postComments();
    }
  };
  // EVENT HANDLERS
  const handleCommentValues = (event) => {
    const comments = event.target.value;
    setCommentValue(comments);
  };

  // VALIDATE COMMENTS
  const handleCommentValidation = (event) => {
    // WARNING MESSAGE
    setWarningMsgClass(
      !event.target.value
        ? "current-vid-input-and-btn-container__input-container--warning-msg-show"
        : ""
    );
    // PINK BORDER
    setPinkBorderClass(
      !event.target.value
        ? "current-vid-input-and-btn-container__input-container--pink-border"
        : ""
    );
  };
  return (
    <form
      className="current-vid-comment-form"
      onClick={(event) => {
        handleCommentSubmit(event); // prevents comment-form submission
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
          <CommentAddInput
            commentValue={commentValue}
            warningMsgClass={warningMsgClass}
            pinkBorderClass={pinkBorderClass}
            handleCommentValues={handleCommentValues}
            handleCommentValidation={handleCommentValidation}
          />
          <CommentAddBtn handleCommentSubmit={handleCommentSubmit} />
        </div>
      </div>
    </form>
  );
};
export default CurrentVidCommentAdd;
