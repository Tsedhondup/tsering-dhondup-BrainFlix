import "./TimeTrack.scss";

const TimeTrack = (props) => {
  return  <div className="scrubbing-and-time-line-container__timeline">
  <span className="scrubbing-and-time-line-container__timeline--current">
    {props.currentTime}
  </span>
  /
  <span className="scrubbing-and-time-line-container__timeline--duration">
    {props.currentDuration}
  </span>
</div>;
};
export default TimeTrack;
