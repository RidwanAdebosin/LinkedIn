import { IoMdHome } from 'react-icons/io';
import LinkedInIcon from '../../assets/linkedin.png';
import "./Header.css";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
    <>
        <nav className="navBar">
            <div className="leftNav">
                <img src={LinkedInIcon} width={40}/>
                <input type="text" name='search' placeholder="Search" />
            </div>
            <div className="middleNav">
                <NavLink >
                    <IoMdHome/>
                </NavLink>
            </div>
        </nav>
    </>
    )
    
};

export default Header;