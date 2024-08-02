import React from "react";
import "./Navbar.css";
import { FaCaretDown } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar_main_container">
      <div className="logo">
        <img src="https://musicmaster.in/images/musicmaster-logo.png" alt="Music Master Logo" />
      </div>
      <div className="menu">
        <ul>
          <li>
            Instruments <FaCaretDown />
            
          </li>
          <li>Singing <FaCaretDown /></li>
          <li>Grades <FaCaretDown /></li>
          <li>Resources <FaCaretDown /></li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="buttons">

        <a href="https://musicmaster.onlineclass.site/signup"><button id="btn1">Student Login</button></a>
       <a href="https://app.musicmaster.in:8081/signup"> <button id="btn2">Book a Demo </button></a>
      </div>
    </div>
  );
}

export default Navbar;
