import UserIcon from "../../../../assets/UserIcon/UserIcon";
import "./Main.css";

const Post = () => {

    const truncate= (str, length) => {
        return str.length > length ? str.substring(0, length) + '...' : str;
    };

    const userTitle = "Front-End Developer | Technical Writer | Tech Assistant Trainer";
  return <div className="post">
    <div className="userPostDetails">
    <UserIcon/>
    <div className="userDetails">
            <h1>Ridwan Adebosin</h1>
            <span> { truncate(userTitle, 40)}</span>
    </div>

    </div>


    <div className="userPost">
    <p>
    Dear dreamer,
</p>
<p>
    Navigating life is not a solitary journey. Having an accountability partner is crucial. They motivate you, regularly check your progress, provide support, and encourage you, helping you maintain momentum. On top of that, a mentor adds immense value. Here are a few highlighted benefits:
</p>
<ul>
    <li>🎯 Networking opportunities: Introductions and connections that expand your professional circle.</li>
    <li>🎯 Accountability: Someone who holds you to your commitments and goals.</li>
    <li>🎯 Career progression: Guidance on advancing in your career path.</li>
    <li>🎯 Personal development: Insights and advice to foster your growth.</li>
</ul>
<p>
    Together, they form a robust support system essential for personal and professional success.
</p>
<p>
    Best regards,
</p>

    </div>
  </div>;
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
