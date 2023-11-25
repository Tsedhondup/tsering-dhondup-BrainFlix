// HOOKS
import { useState } from "react";
// STYLE
import "./CommentDelete.scss";
// ASSET
import deleteLogo from "../../../../../assets/images/icon-delete.svg";
import axios from "axios";

const CommentDelete = (props) => {
  const [confirmDeletePromptClass, setConfirmDeletePromptClass] = useState("");
  // local URL
  const localURL = process.env.REACT_APP_URL;
  // HANDLE DELETE PROMPT DISPLAY
  const handleSetDeletePromptClass = () => {
    setConfirmDeletePromptClass("confirm-delete-prompt-container-outer-show");
  };
  const handleRemoveDeletePromptClass = () => {
    setConfirmDeletePromptClass("");
  };

  const handleDeleteComment = () => {
    axios
      .delete(
        `${localURL}/videos/${props.currentVidId}/comments/${props.commentId}`
      )
      .then((response) => {
        // GET THE ID OF RESPONSE COMMENT OBJECT
        const deleteCommentId = response.data.id;
        // FILTER OUT DELETE COMMENT FROM THE COMMENT-STATE VARIABLE
        const filteredComments = props.currentVidComments.filter((comment) => {
          return comment.id !== deleteCommentId;
        });
        // SET THE COMMENT STATE VARIABLE
        props.setCurrentVidComments(filteredComments);
        // SET THE COMMENT-COUNT STATE VARIABLE
        props.setCurrentVidCommentCounts(filteredComments.length);
      });
  };
  return (
    <div className="comment-delete-container">
      {/* COMMENT-DELETE PROMPT MESSAGE */}
      <div
        className={`confirm-delete-prompt-container-outer-hidden ${confirmDeletePromptClass}`}
        onClick={handleRemoveDeletePromptClass}
      >
        <div className="confirm-delete-prompt-container-inner">
          {/* MESSAGE */}
          <p className="confirm-delete-prompt-container-inner__msg">
            Are you sure want to delete the comment?
          </p>
          {/* BUTTONS */}
          <div className="confirm-delete-prompt-container-inner__button-container">
            {/* CANCEL DELETE */}
            <button
              className="confirm-delete-prompt-container-inner__button-container--delete-cancel"
              onClick={handleRemoveDeletePromptClass}
            >
              Cancel
            </button>
            {/* CONFIRM DELETE */}
            <button
              className="confirm-delete-prompt-container-inner__button-container--delete-confirm"
              onClick={handleDeleteComment}
            >
              Cofirm
            </button>
          </div>
        </div>
      </div>

      {/* COMMENT DELETE BUTTON  */}
      <button
        className="comment-delete-container__button"
        onClick={handleSetDeletePromptClass}
      >
        {/* COMMENT_DELETE-LOGO */}
        <img
          className="comment-delete-container__button--logo"
          src={deleteLogo}
          alt="delete-icon"
        />
      </button>
    </div>
  );
};
export default CommentDelete;
