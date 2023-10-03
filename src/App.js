import "./App.scss";
import Header from "./components/Header/Header";
import CurrentVid from "./components/CurrentVid/CurrentVid";
import CommentCount from "./components/CommentCount/CommentCount";
import CommentAdd from "./components/CommentAdd/CommentAdd";
import CommentList from "./components/CommentList/CommentList";
import NextVid from "./components/NextVid/NextVid";

function App() {
  return (
    <>
      <Header /> 
      <CurrentVid />
      <CommentCount />
      <CommentAdd />
      <CommentList />
      <NextVid />
    </>
  );
}

export default App;
