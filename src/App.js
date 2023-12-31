// REACT ROUTES
import { BrowserRouter, Routes, Route } from "react-router-dom";
// PAGES
import VideoUploadPage from "./Page/VideoUploadPage/VideoUploadPage";
import VideoPlayerPage from "./Page/VideoPlayerPage/VideoPlayerPage";
// STYLE
import "./App.scss";
// COMPONENTS
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      {/*  HEADER COMPONENT */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<VideoPlayerPage />} />
          <Route
            path="/:videoId"
            element={<VideoPlayerPage />}
          />
          <Route path="videoUploadPage" element={<VideoUploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
