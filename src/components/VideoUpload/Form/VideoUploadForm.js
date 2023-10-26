import "./VideoUploadForm.scss";
const VideoUploadForm = () => {
  return (
    <form>
      <label htmlFor="videot-title">title your video</label>
      <input id="video-title" type="text" name="title"></input>
      <label htmlFor="videot-description">title your video</label>
      <textarea id="video-descripton" type="text" name="description"></textarea>
    </form>
  );
};
export default VideoUploadForm;
