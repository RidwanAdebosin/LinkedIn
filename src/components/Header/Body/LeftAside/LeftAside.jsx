
import UserIcon from "../../../../assets/UserIcon/UserIcon";
import "./LeftAside.css";

import { FaBookmark } from "react-icons/fa";

const LeftAside = () => {
  return (
    <aside className="leftAside">
      <div className="profileContainer">
        <div className="topbarWrapper">
          <div className="topBar"></div>
          <div className="topBarProfileImg">
          <UserIcon/>
          </div>
          <div className="userDetails">
            <h1>Ridwan Adebosin</h1>
            <span>Front-End Developer | Technical Writer | Tech Assistant Trainer</span>
          </div>
        </div>
        <hr />
        <div className="postAnalytics">
            <div className="postAnalytic">
                <p>Profile viewers</p>
                <span>51</span>
            </div>
            <div className="postAnalytic">
                <p>Post impressions</p>
                <span>25</span>
            </div>
        </div>
        <hr/>
        <div className="goPremium">

               <p>Strengthen your profile with an Al writing assistant</p>
               <div className="yellowBoxWrapper">
               <div className="yellowBox"></div>
               <p> Try Premium for NGN0</p>

               </div>
        </div>
        <hr/>
        <div className="savedItems">
            <FaBookmark/>
            <p>Saved items</p>
        </div>
      </div>
      <div className="recentActivitiesContainer"></div>
    </aside>
  );
};

export default LeftAside;
