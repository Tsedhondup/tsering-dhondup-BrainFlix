// REACT ROUTES
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// PAGES
import HomePage from "./Page/VideoPage/HomePage/HomePage";
import VideoDetailsPage from "./Page/VideoPage/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./Page/VideoUploadPage/VideoUploadPage";
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
      {/* Define route here  */}

      <BrowserRouter>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/VideoDetailPage">VideoDetailPage</NavLink>
          </li>
          <li>
            <NavLink to="/VideoUploadPage">VideoUploadPage</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="VideoDetailPage" element={<VideoDetailsPage />} />
          <Route path="VideoUploadPage" element={<VideoUploadPage />} />
        </Routes>
      </BrowserRouter>
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
      {/* <VideoSection /> */}
    </>
  );
}

export default App;
