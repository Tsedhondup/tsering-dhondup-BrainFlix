import "./CommentAddPhoto.scss";
import formProfile from "../../../assets/images/Mohan-muruge.jpg";
let CommentAddPhoto = () => {
  return (
    <div className="current-vid-comment-form-img-container">
      {/* IMAGE-WRAPPER WAS CREATED TO MAKE LANDSCAPE IMAGE CICULAR */}
      <div className="current-vid-comment-form-img-container__img-wrapper">
        <img
          className="current-vid-comment-form-img-container__img-wrapper--image"
          src={formProfile}
          alt="profile"
        />
      </div>
    </div>
  );
};
export default CommentAddPhoto;
