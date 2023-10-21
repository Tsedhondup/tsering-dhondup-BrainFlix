// STYLE
import "./App.scss";
// COMPONENTS
import Header from "./components/Header/Header";
import MainVideos from "./components/MainVideos/MainVideos";
function App() {
  return (
    <>
      {/*  HEADER COMPONENT */}
      <Header />
      {/*
       * MAIN-VIDEO COMPONENTS CONTAIN FOLLOWING COMPONENTS
       * CURRENT-VIDEO COMPONENT
       * CURRENT-VIDEO-INFO COMPONENT
       * CURRENT-VID-COMMENT-COUNT COMPONENT
       * CURRENT-VID-COMMENT-ADD COMPONENT
       * CURRENT-VID-COMMENT-LISTS COMPONENT
       * NEXT-VID COMPONENT
       */}
      <MainVideos />
    </>
  );
}

export default App;
