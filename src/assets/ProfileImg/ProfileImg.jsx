
import "./ProfileImg.css";
const Img = "https://media.licdn.com/dms/image/D4D03AQG9dE_TxzyeeA/profile-displayphoto-shrink_800_800/0/1711295259490?e=1724889600&v=beta&t=BOEMAVtTz3XMmh1qjp88pNbu_JY1PAoFiC1YZY2Zqa4";


const UserIcon = () => {
 return(
  <div className="profileImg">
      <img src={Img}/>

  </div>
 )
};

export default UserIcon;