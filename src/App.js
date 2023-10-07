import "./App.scss";
import Header from "./components/Header/Header";
import StateCurrentVid from "./components/State/StateCurrentVid";
import FollowingCurrentVidComponents from "./components/FollowingCurrentVidComponents/FollowingCurrentVidComponents";

function App() {
  return (
    <>
      <Header />
      <StateCurrentVid />
      {/* 
      # COMPONENTS-WRAPPER-1 CONTAINS FOLLOWING COMPONENTS
      (1) CURRENT-VIDEO-INFO
      (2) COMMENT-COUNT
      (3) COMMENT-ADD
      (4) COMMENT-LIST
      */}
      <FollowingCurrentVidComponents />
    </>
  );
}

export default App;
