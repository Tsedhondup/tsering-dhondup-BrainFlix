import "./CurrentVidChannel.scss";

const CurrentVidChannel = (props) => {
  return (
    <p className="current-vid-channel-and-date-container__channel">
      By {props.channel}
    </p>
  );
};
export default CurrentVidChannel;
