import { HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Header/Body/Body";

const App = () => {
  return(
    <HashRouter>
      <Header/>
      <Body/>
    </HashRouter>
  )
};

export default App;