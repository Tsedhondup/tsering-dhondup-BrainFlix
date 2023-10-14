import "./NextVidViews.scss";
// DATA
import VideoDetailData from "../../../data/video-details.json";

const NextVidViews = (props) => {
  // # GETTING TOTAL VIEWS OF VIDEO
  const getViewArray = (views) => {
    // REMOVING ',' FROM THE VIEWS VALUE
    const newViewsValue = views.replace(/[\s,]/g, ""); // regular expression for ',' or comma = /[\s,]/g

    // USING SPREAD OPERATOR TO EXTRACT THE ELEMENT AS A SERIES OF VALUE
    const viewArray = [...newViewsValue];
    return viewArray; // return comma separated elemen from view as series of value
  };
  //------------------------------------------------------//

  // # FORMATING VIEWS VALUE
  const formateViews = (videoId) => {
    // GETTING MATCHED VIDEO
    const matchedVid = VideoDetailData.find((video) => {
      return video.id === videoId;
    });

    // GETTING VIEWS OF MATCHED VIDEO
    const views = matchedVid.views;

    // CONVERTING VIEWS VALUE INTO AN ARRAY
    const viewArray = getViewArray(views);

    // VARIABLE TO STORE VIEWS AND WILL ALSO BE THE RETURN VALUE
    let finalViews;

    // # FORMATING VIEW "UI" BASE ON THE LENGHT OF CHARACTOR IN VIEW VALUE

    // # LESS THAN '4' CHARACTER - '1000'
    if (viewArray.length < 4) {
      finalViews = `${views} + views`;
    }
    // # EQUAL '4' CHARACTER - '1000'
    if (viewArray.length === 4) {
      if (Number(viewArray[2]) > 0) {
        finalViews = `${viewArray[0]}${viewArray[1]}K Views`; // output = e.g '1.6K Views'
      }
    }
    /* 
    # GREATER OR EQUAL '4' CHARACTER - 1000
    && LESS THAN '6' CHARACTER - 10,0000
    */
    if (viewArray.length >= 4 && viewArray.length < 6) {
      if (Number(viewArray[1]) > 0) {
        finalViews = `${viewArray[0]}${viewArray[1]}K Views`;
      } else {
        finalViews = `${viewArray[0]}K Views`;
      }
    }

    /* 
    # - VIEWS VALUE GREATER '6' CHARACTER - 10,0000 
    && LESS THAN '7' CHARACTER - 1,000,000
    */
    if (viewArray.length >= 6 && viewArray.length < 7) {
      if (Number(viewArray[2]) > 0) {
        finalViews = `${viewArray[0]}${viewArray[1]}${viewArray[2]}K Views`; // output = e.g '375K Views'
      } else {
        finalViews = `${viewArray[0]}${viewArray[1]}K Views`; // output = e.g '37K Views'
      }
    }
    /* 
    (3) 
    VIEWS VALUE GREATER OR EQUAL '7' CHARACTER' -  1,000,000
    && LESS THAN '8' CHARACTER' - 10,000,000
    */
    if (viewArray.length >= 7 && viewArray.length < 8) {
      if (Number(viewArray[1]) > 0) {
        finalViews = `${viewArray[0]}.${viewArray[1]}M Views`; // output = e.g '2.1M Views'
      } else {
        finalViews = `${viewArray[0]}M Views`; // output = e.g '2M' Views'
      }
    }
    /* 
    (4) 
    VIEWS VALUE GREATER OR EQUAL '8' CHARACTER' - 10,000,000
    && LESS THAN '9' CHARACTER' - 100,000,000
    */
    if (viewArray.length >= 8 && viewArray.length < 9) {
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
