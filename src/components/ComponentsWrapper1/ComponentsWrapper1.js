import "./ComponentsWrapper1.scss";

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
let ComponentsWrapper1 = () => {
  return (
    /* CURRENT-VIDEO-INFO, COMMENT-COUNT, COMMENT-ADD, & COMMMENT-LIST CONTAINER */
    <div className="componentWrapper1">
      {/*--------------------------------------------------------*/}
      <div>
        <CurrentVidInfo />
        <CommentCount />
        <CommentAdd />
        <CommentList />
      </div>
      {/*--------------------------------------------------------*/}
      {/* NEXT-VIDEO */}
      <NextVid />
    </div>
  );
};
export default ComponentsWrapper1;
