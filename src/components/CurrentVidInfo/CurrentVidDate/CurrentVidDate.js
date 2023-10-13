import "./CurrentVidDate.scss";
let CurrentVidDate = (props) => {
  let currentVidDate = new Date(
    props.currentVideo.timestamp
  ).toLocaleDateString();

  return (
    <p className="current-vid-channel-and-date-container__date">
      {currentVidDate}
    </p>
  );
};
export default CurrentVidDate;
