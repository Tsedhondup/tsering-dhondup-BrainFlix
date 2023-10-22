// STYLE
import "./App.scss";
// COMPONENTS
import Header from "./components/Header/Header";
import VideoSection from "./components/VideoSection/VideoSection";
function App() {
  return (
    <>
      {/*  HEADER COMPONENT */}
      <Header />
      {/*
       * VIDEO-SECTION COMPONENTS CONTAIN FOLLOWING COMPONENTS
       *
       * CURRENT-VIDEO COMPONENT
       * CURRENT-VIDEO-INFO COMPONENT
       * CURRENT-VID-COMMENT-COUNT COMPONENT
       * CURRENT-VID-COMMENT-ADD COMPONENT
       * CURRENT-VID-COMMENT-LISTS COMPONENT
       * NEXT-VID COMPONENT
       */}
      <VideoSection />
    </>
  );
}

export default App;
