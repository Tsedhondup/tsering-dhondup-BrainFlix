import "./CurrentVidTitle.scss";

const CurrentVidTitle = (props) => {
  return (
    <h1 className="current-vid-info-container__info--title">{props.title}</h1>
  );
};
export default CurrentVidTitle;
