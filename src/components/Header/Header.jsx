import { IoMdHome } from 'react-icons/io';
import LinkedInIcon from '../../assets/linkedin.png';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { RiGridFill, RiGroup3Fill } from 'react-icons/ri';
import { FaSuitcase } from 'react-icons/fa6';
import { AiFillMessage } from 'react-icons/ai';
import { BiSolidBell } from 'react-icons/bi';
import Button from '../Button/Button';

const Header = () => {
  return (
    <nav className="navBar">
      <div className="leftNav">
        <img src={LinkedInIcon} width={40} alt="LinkedIn" />
        <input type="text" name="search" placeholder="Search" />
      </div>
      <div className="middleNav">
        <NavLink to="/" className="navlink">
          <IoMdHome size={25} />
          <p>Home</p>
        </NavLink>
        <NavLink to="/mynetwork" className="navlink">
          <RiGroup3Fill size={25} />
          <p>My Network</p>
        </NavLink>
        <NavLink to="/jobs" className="navlink">
          <FaSuitcase size={25} />
          <p>Jobs</p>
        </NavLink>
        <NavLink to="/messaging" className="navlink">
          <AiFillMessage size={25} />
          <p>Messaging</p>
        </NavLink>
        <NavLink to="/notification" className="navlink">
          <BiSolidBell size={25} />
          <p>Notification</p>
        </NavLink>
      </div>
      <div className="rightNav">
        <div className="gridBox">
          <RiGridFill size={25} />
          <span>For Business</span>
        </div>
        <NavLink to="/signup">
          <Button>Sign up</Button>
        </NavLink>
        <div className="premiumlink">
          <a href="#">Unlock 1 month of Premium</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
