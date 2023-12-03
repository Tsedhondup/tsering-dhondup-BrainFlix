import scrub from "../../../../../assets/images/scrub.svg";

import "./ScrubberBar.scss";
const ScrubberBar = (props) => {
  return (
    <div className="scrubbing-control-container">
      <div className="scrubbing-control-container__content">
        {/* SCRUBBER */}
        <div
          className="control-scrubber"
          onClick={(event) => {
            props.handleProgressBarOnClickScrubber(event);
          }}
        ></div>
        {/* PALYED BAR */}
        <div
          ref={props.progressBarRef}
          className="control-played"
          style={{ width: `${props.progressBar}%` }}
          onClick={(event) => {
            props.handleProgressBarOnClickScrubber(event);
          }}
        >
          <img className="video-controls-scrub-icon" src={scrub} alt="scrub" />
        </div>
        {/* BUFFER */}
        <div className="control-buffer"></div>
      </div>
    </div>
  );
};
export default ScrubberBar;
