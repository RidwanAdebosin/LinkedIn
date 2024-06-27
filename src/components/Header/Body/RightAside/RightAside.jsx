import "./RightAside.css";
import Button from "../../../Button/Button";

const SuggestedUser = ({suggestedUserName, suggestedUserImage, onButtonClick, children }) => {
    return (
        <div className="suggestedUserContainer">
        <div className="suggestedUserImage">
            <img src={suggestedUserImage} alt={`${suggestedUserName}'s profile`}/>
        </div>
        <div className="suggestedUserDetails">
            <h3>{suggestedUserName}</h3>
        </div>
        <Button onclick={onButtonClick}>{children}</Button>
        </div>
    )
};


const RightAside = () => {


    return(
        <aside className="rightAside">
           <div className="feedContainer">
            <SuggestedUser />
           </div>
           <div className="footerContainer"></div>
    )
        </aside>
    )
};

export default RightAside;