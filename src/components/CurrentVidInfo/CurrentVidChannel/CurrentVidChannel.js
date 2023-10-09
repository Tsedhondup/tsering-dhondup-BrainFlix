import "./CurrentVidChannel.scss";
let CurrentVidChannel = (props) => {
  return (
    <p className="current-vid-channel-and-date-container__channel">
      {props.channel}
    </p>
  );
};
export default CurrentVidChannel;
