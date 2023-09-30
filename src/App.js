import "./App.scss";
import Header from "./components/Header/Header";
import CurrentVid from "./components/CurrentVid/CurrentVid";
import Comment from "./components/Comment/Comment";
import NextVid from "./components/NextVid/NextVid";

function App() {
  return (
    <>
      <Header />
      <CurrentVid />
      <Comment />
      <NextVid />
    </>
  );
}

export default App;
