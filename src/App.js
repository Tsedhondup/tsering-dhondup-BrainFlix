import "./App.scss";
import Header from "./components/Header/Header";
import StateVideos from "./components/State/StateVideos/StateVideos";
function App() {
  return (
    <>
      <Header />
      <StateVideos />
    </>
  );
}

export default App;
// <StateCurrentVid />
//     {/*
//     # COMPONENTS-WRAPPER-1 CONTAINS FOLLOWING COMPONENTS
//     (1) CURRENT-VIDEO-INFO
//     (2) COMMENT-COUNT
//     (3) COMMENT-ADD
//     (4) COMMENT-LIST
//     */}
//     <FollowingCurrentVidComponents />
