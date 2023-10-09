import "./CurrentVidDescription.scss";
let CurrentVidDescription = (props) => {
  return (
    <p className="current-vid-info-container__info--description">
      {props.description}
    </p>
  );
};
export default CurrentVidDescription;
