import React from "react";
import "./NavBar.css";
import navpic from "../../images/navpic.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <i class="fa-brands fa-react"></i>
        <p>REACT JS</p>
      </div>
      <div className="navbar_social">
        <Link className="facebook" to="www.facebook.com">
          <i class="fa-brands fa-square-facebook"></i>
        </Link>
        <Link className="instagram" to="www.instagram.com">
          <i class="fa-brands fa-square-instagram"></i>
        </Link>
        <Link className="linkedin" to="www.linkedin.com">
          <i class="fa-brands fa-linkedin"></i>
        </Link>
      </div>
      <div className="navbar_elements">
        <ul>
          <li>
            <Link to="/">Profile</Link>
          </li>
          <li>
            <Link to="education">Education</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
        </ul>
      </div>
      <div className="navbar_link">
        <div className="navbar_login">
          <Link to="login">Login</Link>
        </div>
        <div className="navbar_signup">
          <Link to="signup">Sign Up</Link>
        </div>
      </div>
      <div className="navbar_img">
        <Link to="www.images.com">
          <img src={navpic} alt="profile-pic" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
