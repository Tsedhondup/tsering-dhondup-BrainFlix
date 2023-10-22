import "./NextVidChannel.scss";

const NextVidChannel = (props) => {
  return (
    <p className="next-video-channel-and-views-container__channel">
      {props.channel}
    </p>
  );
};
export default NextVidChannel;
