import "./NextVidViews.scss";
// DATA
import VideoDetailData from "../../../data/video-details.json";

const NextVidViews = (props) => {
  //*** METHODS ***//

  // (1) - GETTING VIEW VALUE AS A SERIES OF VALUE STORE IN AN ARRAY
  const getViewArray = (views) => {
    // REMOVING ',' FROM THE VIEWS VALUE E.G '90,000'
    const newViewsValue = views.replace(/[\s,]/g, ""); // regular expression for ',' or comma = /[\s,]/g
    // USING SPREAD OPERATOR TO EXTRACT THE ELEMENT AS A SERIES OF VALUE
    const viewArray = [...newViewsValue];
    // RETURN VIEW-ARRAY
    return viewArray;
  };
  //------------------------------------------------------//

  // (2) - FORMATING 'VIEW UI' BASE ON THE LENGHT OF CHARACTOR IN 'VIEW VALUES'
  const formateViews = (videoId) => {
    // GETTING VIDEO WITH MATCHING FROM VIDEO-DETAIL-JSON FILE
    const matchedVid = VideoDetailData.find((video) => {
      return video.id === videoId;
    });

    // GETTING VIEWS OF MATCHED VIDEO
    const views = matchedVid.views;

    // INVOKING GET-VIEW-ARRAY FUNCTION TO CONVERT VIEWS VALUE INTO AN ARRAY
    const viewArray = getViewArray(views);

    // VARIABLE TO STORE VIEWS AND WILL ALSO BE THE FINAL RETURN VALUE*
    let finalViews;

    // LESS THAN '4' CHARACTER === 1000
    if (viewArray.length < 4) {
      finalViews = `${views} + views`;
    }

    // EQUAL TO '4' CHARACTER === 1000
    if (viewArray.length === 4) {
      // IF SECOND-INDEX OF VIEW-ARRAY IS GREATER THAN 0
      if (Number(viewArray[1]) > 0) {
        finalViews = `${viewArray[0]}${viewArray[1]}K Views`; // output = e.g '1.6K Views'
      } else {
        finalViews = `${viewArray[0]}K Views`; // output = e.g '1K Views'
      }
    }

    // EQUAL TO '5' CHARACTER === 10,000 (GREATER THAN 1000 && LESS THAN 100,000)
    if (viewArray.length > 4 && viewArray.length < 6) {
      finalViews = `${viewArray[0]}${viewArray[1]}K Views`; // output = e.g '16K Views'
    }

    // EQUAL TO '6' CHARACTER - 100,000 === (GREATER THAN 10,000 && LESS THAN 1,000,000 '1MILLION')
    if (viewArray.length === 6 && viewArray.length < 7) {
      finalViews = `${viewArray[0]}${viewArray[1]}${viewArray[2]}K Views`; // output = e.g '375K Views'
    }

    // EQUAL '7' CHARACTER' -  1,000,000 === (GREATER THAN 999,999 && LESS THAN 10,000,000 '10MILLIONS')
    if (viewArray.length === 7 && viewArray.length < 8) {
      // IF SECOND-INDEX OF VIEW-ARRAY IS GREATER THAN 0
      if (Number(viewArray[1]) > 0) {
        finalViews = `${viewArray[0]}.${viewArray[1]}M Views`; // output = e.g '2.1M Views'
      } else {
        finalViews = `${viewArray[0]}M Views`; // output = e.g '2M' Views'
      }
    }

    // EQUAL '8' CHARACTER' - 10,000,000 === ( GREATER THAN 1,000,000 && LESS THAN 100,000,000)
    if (viewArray.length > 7 && viewArray.length < 9) {
      finalViews = `${viewArray[0]}${viewArray[1]}M Views`; // out-put = e.g '20M Views'
    }
    // *** RETURNING FORMATED-VIEWS VARIABLE *** //
    return finalViews;
  };

  return (
    <p className="next-video-channel-and-views-container__views">
      {formateViews(props.id)}
    </p>
  );
};
export default NextVidViews;
