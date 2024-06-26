import { HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Header/Body/Body";
import "./App.css";

const App = () => {
  return(
    <div className="wrapper">
    <HashRouter>
      <Header/>
      <Body/>
    </HashRouter>
    </div>
  )
};

export default App;