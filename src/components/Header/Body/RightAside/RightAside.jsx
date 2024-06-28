import "./RightAside.css";
import Button from "../../../Button/Button";

const initialSuggestedUser = [
  {
    id: 118836,
    suggestedUserName: "Ebuka Nweje",
    suggestedUserImage:
      "https://media.licdn.com/dms/image/D5603AQH8F8dXtT0lYA/profile-displayphoto-shrink_200_200/0/1719415807025?e=1724889600&v=beta&t=4u9PHV-Bc5jb7aeyTkNwwzRJawI2PpbvCEe7S_I8bIA",
    suggestedUserIntro:
      "Full-Stack Developer | React | Redux | Node | Ruby | PHP | JavaScript | SQL | Java | Ruby on Rails | Student Project Reviewer at Microverse",
  },
  {
    id: 933372,
    suggestedUserName: "Jude Agboola",
    suggestedUserImage:
      "https://media.licdn.com/dms/image/D4D03AQG-u5DPg1j4IQ/profile-displayphoto-shrink_800_800/0/1675157465443?e=1724889600&v=beta&t=FQ2JuJ-J4jEMdxYDRwLXSJfcdJEq9tfwSqHYs1NPxpo",
    suggestedUserIntro:
      "Experienced Full Stack Software Engineer with experience building products and maintaining large open source projects",
  },
  {
    id: 499476,
    suggestedUserName: "Ojo Oluwasetemi",
    suggestedUserImage:
      "https://media.licdn.com/dms/image/C5603AQHzpluWi8il6g/profile-displayphoto-shrink_100_100/0/1541935865396?e=1724889600&v=beta&t=9eSmoveuXhBX46QaQdIVUOkxY_Pxb3ewnV2YAaxG81Y",
    suggestedUserIntro: "Full Stack Engineer at Fluna",
  },
];

const SuggestedUser = ({
  suggestedUserName,
  suggestedUserImage,
  onButtonClick,
  children,
  suggestedUserIntro,
}) => {
  const truncate = (str, length) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return (
    <div className="suggestedUserContainer">
      <div className="suggestedUserImage">
        <img src={suggestedUserImage} alt={`${suggestedUserName}'s profile`} />
      </div>
      <div className="suggestedUserDetails">
        <h3>{suggestedUserName}</h3>
        <p>{truncate(suggestedUserIntro, 80)}</p>
        <Button onClick={onButtonClick}>{children}</Button>
      </div>
    </div>
  );
};

const RightAside = () => {
  const handleButtonClick = (userId) => {
    console.log(`Go to user profile ${userId}`);
  };

  return (
    <aside className="rightAside">
      <div className="feedContainer">
        {initialSuggestedUser.map((user) => {
          return (
            <SuggestedUser
              key={user.id}
              suggestedUserImage={user.suggestedUserImage}
              suggestedUserName={user.suggestedUserName}
              suggestedUserIntro={user.suggestedUserIntro}
              onButtonClick={() => handleButtonClick(user.id)}
            >
              + Follow
            </SuggestedUser>
          );
        })}
      </div>
      <div className="footerContainer"></div>
    </aside>
  );
};

export default RightAside;
