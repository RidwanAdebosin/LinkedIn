import UserIcon from "../../../../assets/UserIcon/UserIcon";
import "./Main.css";

const Post = () => {
  return <div className="post"></div>;
};

const MiddleContainer = () => {
  return (
    <aside className="middleContainer">
      <div className="postField">
        <div className="inputField">
            <UserIcon/>
            <input type="name" placeholder="Start a post, try writing with AI" className="input"/>
        </div>
        <div className="inputFieldIcon">
            <div className="mediaSection">
                
                <p>Media</p>
            </div>
            <div className="eventSection">
                
                <p>Event</p>
            </div>
            <div className="writeSection">
                
                <p>Write article</p>
            </div>
        </div>
      </div>
      <div className="lineThrough">
        <hr />
        <span>
          Sort by: <em>Top</em>
        </span>
      </div>
      <div className="posts">
        <Post />
        <Post />
        <Post />
      </div>
    </aside>
  );
};

export default MiddleContainer;
