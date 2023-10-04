import "./App.scss";
import Header from "./components/Header/Header";
import CurrentVid from "./components/CurrentVid/CurrentVid";
import FollowingCurrentVidComponents from "./components/FollowingCurrentVidComponents/FollowingCurrentVidComponents";

function App() {
  return (
    <>
      <Header />
      <CurrentVid />

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
