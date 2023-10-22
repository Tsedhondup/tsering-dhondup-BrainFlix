import "./CurrentVidDate.scss";

const CurrentVidDate = (props) => {
  // FORAMTING DATE
  const currentVidDate = new Date(
    props.currentVideo.timestamp
  ).toLocaleDateString();

  return (
    <p className="current-vid-channel-and-date-container__date">
      {currentVidDate}
    </p>
  );
};
export default CurrentVidDate;
