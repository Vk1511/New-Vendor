import React from "react";
import "./VendorMenu.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";

function VendorMenu({ setToggle, toggle }) {
  return (
    <div className="vendor_menu">
      <div className="head">
        <div className="title">
          <MenuIcon
            style={{ fontSize: 35, cursor: "pointer" }}
            onClick={() => setToggle(!toggle)}
          />
          <div className="head_title">LOST</div>
        </div>
        <div className="head_icon">
          <NotificationsIcon
            className="head_icon_img"
            style={{ fontSize: "2rem", cursor: "pointer" }}
          />
          <PersonIcon
            className="head_icon_img"
            style={{ fontSize: "2rem", cursor: "pointer" }}
          />
        </div>
      </div>
      <div className="search">
        <SearchIcon
          className="search_icon"
          style={{ fontSize: 35, color: "#171717" }}
        />
        <input
          type="search"
          placeholder="Search Here..."
          className="search_box"
        />
      </div>
    </div>
  );
}

export default VendorMenu;
