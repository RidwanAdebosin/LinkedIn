import LeftAside from "./LeftAside/LeftAside"
import Main from "./Main/Main"
import RightAside from "./RightAside/RightAside";
import "./Body.css";

const Body = () => {
    return (
        <main>
        <LeftAside/>
        <Main/>
        <RightAside/>
        </main>
    )
};

export default Body;