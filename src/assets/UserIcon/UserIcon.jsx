
import "./UserIcon.css";
// const Img = "https://media.licdn.com/dms/image/D4D03AQG9dE_TxzyeeA/profile-displayphoto-shrink_200_200/0/1711295259490?e=1724889600&v=beta&t=SCbGRgI7sUGXUan5VdUsgdaYN_AdCLPGMpX6mPOqsts";
import ProfileImg from '../../assets/ProfileImg.jpeg';


const UserIcon = () => {
 return(
     <div className="profileImg">
      <img src={ProfileImg} />
      
  </div>
 )
};

export default UserIcon;