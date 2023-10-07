import "./FollowingCurrentVidComponents.scss";

import CurrentVidInfo from "../CurrentVidInfo/CurrentVidInfo";
import CommentCount from "../CommentCount/CommentCount";
import CommentAdd from "../CommentAdd/CommentAdd";
import CommentList from "../CommentList/CommentList";
import StateNextVid from "../State/StateNextVid";
/*
# PURPOSE => TO APPLY FLEX PROPERTY AND MATCH THE DESIGN IN MOCK-UP

# THIS COMPONENT ACT AS CONTATINER FOR FOLLOWING COMPONENTS
# PART-1
   (1) CURRENT VIDEO INFO 
   (2) COMMENT-COUNT
   (3) COMMENT-ADD
   (4) COMMENT-LIST
# PART-2
   (5) NEXT-VIDEOS - FROM STATE-NEXT-VIDEO COMPONENT
 */
let FollowingCurrentVidComponents = () => {
  return (
    <div className="following-current-vid-components">
      <div className="following-current-vid-components__content">
        {/*--------------------------------------------------------*/}
        <div className="current-vid-info-and-comment-container">
          <CurrentVidInfo />
          <CommentCount />
          <CommentAdd />
          <CommentList />
        </div>
        {/*--------------------------------------------------------*/}
        {/* NEXT-VIDEO */}
        <div className="next-video-container">
          <StateNextVid />
        </div>
      </div>
    </div>
  );
};
export default FollowingCurrentVidComponents;
