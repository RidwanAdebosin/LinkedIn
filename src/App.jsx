import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Header/Body/Body" 
import "./App.css";
import SignUp from "./Pages/SignUp";

const App = () => {
  return (
    <div className="wrapper">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
