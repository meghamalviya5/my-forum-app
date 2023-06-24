import React from "react";
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faRocket,
  faBookmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./NavSideBar.css";

const NavSideBar = () => {
  return (
    <div className="nav-sidebar-div">
      <div className="nav-sidebar-items">
        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
      </div>
      <div className="nav-sidebar-items">
        <FontAwesomeIcon icon={faRocket} />
        <span>Explore</span>
      </div>
      <div className="nav-sidebar-items">
        <FontAwesomeIcon icon={faBookmark} />
        <span>Bookmarks</span>
      </div>
      <div className="nav-sidebar-items">
        <FontAwesomeIcon icon={faUser} />
        <span>Profile</span>
      </div>
      <div className="flex flex-space-between flex-align-center">
        <div className="flex">
          <div className="grey-bg br-full width-xl height-xl"></div>
          <div className="flex flex-column ml-xs">
            <div className="fw-bold">Adarsh Balika</div>
            <div className="fw-light grey-color">@adarshbalika</div>
          </div>
        </div>
        <div className="grey-color fw-bold">...</div>
      </div>
    </div>
  );
};

export default NavSideBar;
