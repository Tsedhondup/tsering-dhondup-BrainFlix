import "./CurrentVidMoment.scss";

const CurretVidMoment = (props) => {
  // TIME ELAPSE SINCE A CURRENT VIDEO WAS UPLOADED

  const getMoment = (timestamp) => {
    // VARIBALE TO STORE TIME ELAPSE SINCE A CURRENT-VIDEO WAS UPLOADED
    let moment;

    // GETTING TIME DIFFERENCE AND STORE THE DIFFERENCE IN MILLI-SECONDS
    const timeDifference = new Date().getTime() - timestamp;

    /*
     * CONVERTING TIME-DIFFERENCES (IN MILLI-SECONDS) INTO DIFFERENT UNITS OF TIME (CUSTOM TIME)
     * EACH UNIT OF TIME INDICATES TOTAL TIME ELAPSED SINCE THE VIDEO WAS UPLOADED
     *
     * e.g : 'TOTAL-SECONDS' VARIABLE INDICATES THE NUMBER OF SECONDS ELAPSED SINCE A CURRENT VIDEO WAS UPLOADED
     */
    const totalSeconds = timeDifference / 1000; // second
    const totalMins = totalSeconds / 60; // minute
    const totalHours = totalMins / 60; // hour
    const totalDays = totalHours / 24; // day
    const totalWeeks = totalDays / 7; // week
    const totalMonths = totalWeeks * 0.23; // month
    const totalYears = totalMonths / 12; // year

    // TOTAL MILLI-SECONDS IN GIVEN UNITS OF TIME
    const secMilli = 1000; // 1 second
    const minMilli = 60000; // 1 minute
    const hourMilli = 3600000; // 1 hour
    const dayMilli = 86400000; // 1 day
    const weekMilli = 604800000; // 1 week
    const monthMilli = 2592000000; // 1 month
    const yearMilli = 31536000000; // 1 year

    /*
     * GETTING AND ASSIGNING APPRORIATE TIME TO "MOMENT VARIABLE" BASED ON TOTAL OBTAINED "TIME-DIFFERENCE"
     */

    // MILLI-SECONDS*
    if (timeDifference < secMilli) {
      moment = "0s";
    }
    // SECONDS*
    if (timeDifference >= secMilli && timeDifference < minMilli) {
      moment = `${Math.round(totalSeconds)}s ago`;
    }
    // MINUTES*
    if (timeDifference >= minMilli && timeDifference < hourMilli) {
      moment =
        timeDifference >= 2 * minMilli
          ? `${Math.round(totalMins)} mins ago`
          : `${Math.round(totalMins)} min ago`;
    }
    // HOURS*
    if (timeDifference >= hourMilli && timeDifference < dayMilli) {
      moment =
        timeDifference >= 2 * hourMilli
          ? `${Math.round(totalHours)} hrs ago`
          : `${Math.round(totalHours)} hr ago`;
    }
    // DAYS*
    if (timeDifference >= dayMilli && timeDifference < weekMilli) {
      moment =
        timeDifference >= 2 * dayMilli
          ? `${Math.round(totalDays)} days ago`
          : `${Math.round(totalDays)} day ago`;
    }
    // WEEKS*
    if (timeDifference >= weekMilli && timeDifference < monthMilli) {
      moment =
        timeDifference >= 2 * dayMilli
          ? `${Math.round(totalWeeks)} weeks ago`
          : `${Math.round(totalWeeks)} week ago`;
    }
    // MONTHS*
    if (timeDifference >= monthMilli && timeDifference < yearMilli) {
      moment =
        timeDifference >= 2 * monthMilli
          ? `${Math.round(totalMonths)} months ago`
          : `${Math.round(totalMonths)} month ago`;
    }
    // YEARS*
    if (timeDifference >= yearMilli) {
      moment =
        timeDifference >= 2 * yearMilli
          ? `${Math.floor(totalYears)} years ago`
          : `${Math.floor(totalYears)} year ago`;
    }

    // RETURNING MOMENT VARIABLE
    return moment;
  };

  // RENDERING
  return (
    // <p className="current-vid-info-container__info--moment">{props.moment}</p>
    <p className="current-vid-info-container__info--moment">
      Posted {getMoment(props.timestamp)}
    </p>
  );
};
export default CurretVidMoment;
