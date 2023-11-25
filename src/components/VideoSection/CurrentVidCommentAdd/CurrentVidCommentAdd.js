// HOOKS
import { useState } from "react";
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
  const localURL = process.env.REACT_APP_URL;
  // POSTING COMMENTS
  const postComments = () => {
    // CREAT COMMENT OBJECT
    const commentObject = {
      comment: commentValue,
      name: "Tsering Dhondup",
    };

    axios
      .post(`${localURL}/videos/${props.currentVidId}/comments`, commentObject)
      .then((response) => {
        // EXTRACT THE COMMENTS FROM COMMENT-STATE VARIABLE
        const newComments = [...props.currentVidComments, response.data];
        // SET THE COMMENT STATE VARIABLE WITH NEW COMMENTS
        props.setCurrentVidComments(newComments);
        // SET THE COMMENT-COUNT STATE VARIABLE
        props.setCurrentVidCommentCounts(newComments.length);
      })
      .then((response) => {
        setCommentValue("");
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
    <form className="current-vid-comment-form">
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
