import UserIcon from '../assets/UserIcon/UserIcon';
import './SignUp.css';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
//   const Logo = "https://upload.wikimedia.org/wikipedia/commons/1/19/LinkedIn_logo.svg";
  const Add = "https://banner2.cleanpng.com/20180423/gkw/kisspng-google-logo-logo-logo-5ade7dc753b015.9317679115245306313428.jpg";
  const Apple = "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png";

  return (
    <div className="Wrapper">
   
      <div className="Card">
        <h2>Sign in</h2>
        <p>Stay updated on your professional world</p>
        <div className="input">
          <input type="email" className="inputField" placeholder="Email or Phone " id="EmailOrPhone" required />
          {/* <label htmlFor="EmailOrPhone" className="inputLabel">Email or Phone</label> */}
        </div>
        <div className="input">
          <input type="password" className="inputField" placeholder="Password " name="Password" id="Password" required />
          {/* <label htmlFor="Password" className="inputLabelP">Password</label> */}
        </div>
        <h6>Forget password?</h6>
        <NavLink to="/layout" className="link">
          <button>Sign in</button>
        </NavLink>
        <div className="or">
          <div className="line"></div>
          <p>or</p>
          <div className="line"></div>
        </div>
        <div className="agree">
          <p>By clicking Continue, you agree to LinkedIn’s <span>User Agreement, Privacy Policy, and Cookie Policy.</span></p>
        </div>
        <div className="google">
          <div className="left">
            <div className="img">
              <UserIcon />
            </div>
            <div className="text">
              <span><strong>Continue as Ridwan</strong></span>
              <span>adebosinadewale@gmail.com</span>
            </div>
          </div>
          <div className="right">
            <img src={Add} alt="Google Logo" />
          </div>
        </div>
        <div className="apple">
          <img src={Apple} alt="Apple Logo" />
          <p>Sign in with Apple</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
