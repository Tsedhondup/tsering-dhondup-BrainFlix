import "./App.scss";
import Header from "./components/Header/Header";
import CurrentVid from "./components/CurrentVid/CurrentVid";
import ComponentsWrapper1 from "./components/ComponentsWrapper1/ComponentsWrapper1";

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
      <ComponentsWrapper1 />
    </>
  );
}

export default App;
