import React, { useState } from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import "./Sidebar.css";

function Sidebar({ toggle }) {
  const [selectedIteam, setSelectedIteam] = useState("Dashboard");

  return (
    <div className={`sidebar_container ${toggle ? "full" : "half"}`}>
      <div
        style={{ width: `${toggle ? "88%" : ""}` }}
        onClick={() => setSelectedIteam("Dashboard")}
        className={`iteam ${selectedIteam === "Dashboard" ? "active" : ""}`}
      >
        <DashboardIcon />
        <span
          style={{ display: `${!toggle ? "none" : ""}`, marginLeft: ".3rem" }}
        >
          Dashboard
        </span>
      </div>
      <div
        style={{ width: `${toggle ? "88%" : ""}` }}
        onClick={() => setSelectedIteam("Wallet")}
        className={` iteam ${selectedIteam === "Wallet" ? "active" : ""}`}
      >
        <AccountBalanceWalletIcon />
        <span
          style={{ display: `${!toggle ? "none" : ""}`, marginLeft: ".3rem" }}
        >
          Wallet
        </span>
      </div>
      <div
        style={{ width: `${toggle ? "88%" : ""}` }}
        onClick={() => setSelectedIteam("Setting")}
        className={`iteam ${selectedIteam === "Setting" ? "active" : ""}`}
      >
        <SettingsIcon />
        <span
          style={{ display: `${!toggle ? "none" : ""}`, marginLeft: ".3rem" }}
        >
          Setting
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
