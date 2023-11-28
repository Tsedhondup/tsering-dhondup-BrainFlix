import "./VideoUploadThumbnail.scss";
const VideoUploadThumbnail = ({ thumbnail, handleThumbnail }) => {
  return (
    <div className="video-upload-container__thumbnail-container">
      <h3 className="video-upload-container__thumbnail-container--header">
        Video Thumbnail
      </h3>
      <input
        className="video-upload-container__thumbnail-container--img-input"
        type="file"
        accept="image/*"
        name="thumbnail"
        onChange={(event) => {
          handleThumbnail(event);
        }}
      ></input>
      {/* RENDER IMAGE ONLY AFTER THE USER UPLOAD FILE */}
      {thumbnail ? (
        <img
          className="video-upload-container__thumbnail-container--image"
          src={`${thumbnail ? URL.createObjectURL(thumbnail) : ""}`}
          alt="img"
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default VideoUploadThumbnail;
