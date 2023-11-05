import { useState } from "react";
import "./CommentAddInput.scss";

const CommentAddInput = (props) => {
  return (
    <div className="current-vid-input-and-btn-container__input-container">
      {/* INPUT FOR SCREEN MIN-WIDTH:320PX / MOBILE*/}
      <textarea
        className={`current-vid-input-and-btn-container__input-container--input-mobile ${props.pinkBorderClass}`}
        id="comment-input"
        type="text"
        placeholder="Add a new comment"
        value={props.commentValue}
        onChange={(event) => {
          props.handleCommentValues(event);
          props.handleCommentValidation(event);
        }}
        onBlur={(event) => {
          props.handleCommentValues(event);
          props.handleCommentValidation(event);
        }}
      />
      {/* INPUT FOR SCREEN MIN-WIDTH:768PX AND BEYOND  */}
      <input
        // className="current-vid-input-and-btn-container__input-container--input-tablet"
        className={`current-vid-input-and-btn-container__input-container--input-tablet ${props.pinkBorderClass}`}
        type="text"
        placeholder="Add a new comment"
        value={props.commentValue}
        onChange={(event) => {
          props.handleCommentValues(event);
          props.handleCommentValidation(event);
        }}
        onBlur={(event) => {
          props.handleCommentValues(event);
          props.handleCommentValidation(event);
        }}
      ></input>
      <span
        className={`current-vid-input-and-btn-container__input-container--warning-msg-hidden ${props.warningMsgClass}`}
      >
        Cannot submit empty comment!
      </span>
    </div>
  );
};
export default CommentAddInput;
