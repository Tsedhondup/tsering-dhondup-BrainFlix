let CurretVideoMoment = (props) => {
  // VARIBLE TO STORE TOTAL TIME ELAPSED SINCE THE COMMENT WAS ADDED
  let moment;
  // FUNCTION TO HANDLER MEOMENT - TIME SINCE VIDEO WAS UPLOADED
  console.log(props.timestamp);
  let generateMoment = (timestamp) => {
    // GETTING TIME DIFFERENCE AND STORE THE DIFFERENCE IN MILLI-SECONDS
    let timeDifference = new Date().getTime() - timestamp;

    /*
        # CONVERTING TIME-DIFFERENCES (IN MILLI-SECONDS) INTO DIFFERENT UNITS OF TIME 
        - EACH UNIT OF TIME INDICATES TOTAL TIME ELAPSED SINCE THE COMMENT WAS ADDED 

        - e.g : 'secDiffs' VARIABLE INDICATES THE TOTAL SECONDS ELAPSED SINCE THE COMMENT WAS ADDED 
         */
    let secDiffs = timeDifference / 1000; // second
    let minDiffs = secDiffs / 60; // minute
    let hourDiffs = minDiffs / 60; // hour
    let dayDiffs = hourDiffs / 24; // day
    let weekDiffs = dayDiffs / 7; // week
    let monthDiffs = weekDiffs * 0.23; // month
    let yearDiffs = monthDiffs / 12; // year

    // TOTAL MILLI-SECONDS IN GIVEN UNITS OF TIME
    let secMilli = 1000; // 1 second
    let minMilli = 60000; // 1 minute
    let hourMilli = 3600000; // 1 hour
    let dayMilli = 86400000; // 1 day
    let weekMilli = 604800000; // 1 week
    let monthMilli = 2592000000; // 1 month
    let yearMilli = 31536000000; // 1 year

    /* 
         # RENDERING APPRORIATE TIME INTO DOM BASED ON TOTAL MILLI-SECONDS IN TIME-DIFFERENCE 
         WITH RESPECTIVE TO TOTAL MILLI-SECONDS IN A GIVEN UNIT OF TIME 
        */

    // MILLI-SECONDS*
    if (timeDifference < secMilli) {
      moment = "0s";
    }
    // SECONDS*
    if (timeDifference >= secMilli && timeDifference < minMilli) {
      moment = `${Math.round(secDiffs)}s ago`;
    }
    // MINUTES*
    if (timeDifference >= minMilli && timeDifference < hourMilli) {
      moment =
        timeDifference >= 2 * minMilli
          ? `${Math.round(minDiffs)} mins ago`
          : `${Math.round(minDiffs)} min ago`;
    }
    // HOURS*
    if (timeDifference >= hourMilli && timeDifference < dayMilli) {
      moment =
        timeDifference >= 2 * hourMilli
          ? `${Math.round(hourDiffs)} hrs ago`
          : `${Math.round(hourDiffs)} hr ago`;
    }
    // DAYS*
    if (timeDifference >= dayMilli && timeDifference < weekMilli) {
      moment =
        timeDifference >= 2 * dayMilli
          ? `${Math.round(dayDiffs)} days ago`
          : `${Math.round(dayDiffs)} day ago`;
    }
    // WEEKS*
    if (timeDifference >= weekMilli && timeDifference < monthMilli) {
      moment =
        timeDifference >= 2 * dayMilli
          ? `${Math.round(dayDiffs)} wks ago`
          : `${Math.round(dayDiffs)} wk ago`;
    }
    // MONTHS*
    if (timeDifference >= monthMilli && timeDifference < yearMilli) {
      moment =
        timeDifference >= 2 * monthMilli
          ? `${Math.round(monthDiffs)} mths ago`
          : `${Math.round(monthDiffs)} mth ago`;
    }
    // YEARS*
    if (timeDifference >= yearMilli) {
      moment =
        timeDifference >= 2 * yearMilli
          ? `${Math.floor(yearDiffs)} yrs ago`
          : `${Math.floor(yearDiffs)} yr ago`;
    }
  };

  // RENDERING
  return (
    <p>
      {() => {
        generateMoment(props.timestamp);
      }}
    </p>
  );
};
export default CurretVideoMoment;
