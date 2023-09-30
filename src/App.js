import "./App.scss";
import Header from "./components/Header/Header";
import CurrentVid from "./components/CurrentVid/CurrentVid";
import CommentContainer from "./components/CommentContainer/CommentContainer";
import NextVid from "./components/NextVid/NextVid";

function App() {
  return (
    <>
      <Header />
      <CurrentVid />
      <CommentContainer />
      <NextVid />
    </>
  );
}

export default App;
