import "./CurrentVidDate.scss";
let CurrentVidDate = (props) => {
  return (
    <p className="current-vid-channel-and-date-container__date">{props.date}</p>
  );
};
export default CurrentVidDate;
