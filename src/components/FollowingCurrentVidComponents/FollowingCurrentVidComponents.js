import "./FollowingCurrentVidComponents.scss";

import CurrentVidInfo from "../CurrentVidInfo/CurrentVidInfo";
import CommentCount from "../CommentCount/CommentCount";
import CommentAdd from "../CommentAdd/CommentAdd";
import CommentList from "../CommentList/CommentList";
import NextVid from "../NextVid/NextVid";

/*
# THIS COMPONENT ACT AS CONTATINER FOR FOLLOWING COMPONENTS
# PURPOSE OF THIS COMPONENT IS TO APPLY FLEX PROPERTY AND MATCH THE DESIGN IN MOCK-UP

(1) CURRENT VIDEO INFO 
(2) COMMENT-COUNT
(3) COMMENT-ADD
(4) COMMENT-LIST
(5) NEXT-VIDEOS
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
          <NextVid />
        </div>
      </div>
    </div>
  );
};
export default FollowingCurrentVidComponents;
