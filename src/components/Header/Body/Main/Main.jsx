import { useState, useEffect } from "react";
import UserIcon from "../../../../assets/UserIcon/UserIcon";
import "./Main.css";
import Button from "../../../Button/Button";

const Post = ({ userName, userTitle, postContent, postContentImage }) => {
  const truncate = (str, length) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return (
    <div className="post">
      <div className="userPostDetails">
        <UserIcon />
        <div className="userDetails">
          <h1>{userName}</h1>
          <span>{truncate(userTitle, 40)}</span>
        </div>
      </div>

      <div className="userPost">
        {postContent}
        {postContentImage && (
          <div className="postContentImage">{postContentImage()}</div>
        )}
      </div>
    </div>
  );
};

const MiddleContainer = () => {
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (postContent.trim()) {
      const newPost = {
        userName: "Ridwan Adebosin",
        userTitle: "User Title",
        postContent,
        postContentImage: null,
      };
      setPosts([newPost, ...posts]);
      setPostContent("");
    }
  };

  const samplePostContent = (
    <>
      <p>Dear dreamer,</p>
      <p>
        Navigating life is not a solitary journey. Having an accountability
        partner is crucial. They motivate you, regularly check your progress,
        provide support, and encourage you, helping you maintain momentum. On
        top of that, a mentor adds immense value. Here are a few highlighted
        benefits:
      </p>
      <ul>
        <li>
          🎯 Networking opportunities: Introductions and connections that expand
          your professional circle.
        </li>
        <li>
          🎯 Accountability: Someone who holds you to your commitments and
          goals.
        </li>
        <li>
          🎯 Career progression: Guidance on advancing in your career path.
        </li>
        <li>
          🎯 Personal development: Insights and advice to foster your growth.
        </li>
      </ul>
      <p>
        Together, they form a robust support system essential for personal and
        professional success.
      </p>
      <p>
        Best regards, <br />
        Ridwan Adebosin.
      </p>
    </>
  );

  const postContentImage = () => {
    return (
      <img
        src="https://media.licdn.com/dms/image/D4D22AQEBwf3Wo4NnaA/feedshare-shrink_800/0/1719072638253?e=1722470400&v=beta&t=0W3v_PD1MkRzOIKVR02uDQoerWt9KJim3Q9VV86LBW0"
        alt="Post content"
      />
    );
  };

  // Adding sample posts to the initial state
  useEffect(() => {
    setPosts([
      {
        userName: "Ridwan Adebosin",
        userTitle:
          "Front-End Developer | Technical Writer | Tech Assistant Trainer",
        postContent: samplePostContent,
        postContentImage: postContentImage,
      },
      {
        userName: "Ridwan Adebosin",
        userTitle:
          "Front-End Developer | Technical Writer | Tech Assistant Trainer",
        postContent: samplePostContent,
        postContentImage: null,
      },
      {
        userName: "Ridwan Adebosin",
        userTitle:
          "Front-End Developer | Technical Writer | Tech Assistant Trainer",
        postContent: samplePostContent,
        postContentImage: null,
      },
    ]);
  }, []);

  return (
    <aside className="middleContainer">
      <div className="postField">
        <div className="inputField">
          <UserIcon />
          <form onSubmit={handlePostSubmit}>
            <input
              type="text"
              placeholder="Start a post, try writing with AI"
              className="input"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
           
          </form>
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
        {posts.map((post, index) => (
          <Post
            key={index}
            userName={post.userName}
            userTitle={post.userTitle}
            postContent={post.postContent}
            postContentImage={post.postContentImage}
          />
        ))}
      </div>
    </aside>
  );
};

export default MiddleContainer;
