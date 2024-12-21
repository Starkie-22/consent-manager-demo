import React, { useState } from "react";
import "../styles/Sidebar.css";
import CompanyLogo from "../assets/icons/hyperverge-logo.svg";
import Home from "../assets/icons/home-icon.svg";
import Applications from "../assets/icons/applications-icon.svg";
import Analytics from "../assets/icons/analytics-icon.svg";
import Workflows from "../assets/icons/workflows-icon.svg";
import DevHub from "../assets/icons/devhubs-icon.svg";
import Account from "../assets/icons/accounts-icon.svg";
import ConsentManager from "../assets/icons/consent-manager.svg";
import Demo from "../assets/icons/demo-icon.svg";
import Configuration from "../assets/icons/configurations-icon.svg";
import Search from "../assets/icons/search-icon.svg";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="thin-section">
        <div className="logo-container">
          <img src={CompanyLogo} alt="Company Logo" className="company-logo" />
        </div>
        <div className="icons-section">
          <div className="icon-set">
            <img src={Home} alt="Home" className="icon-image" />
            <span className="icon-label">Home</span>
          </div>
          <div className="icon-set">
            <img
              src={Applications}
              alt="Applications"
              className="icon-image-special"
            />
            <span className="icon-label">Applications</span>
          </div>
          <div className="icon-set">
            <img src={Analytics} alt="Analytics" className="icon-image" />
            <span className="icon-label">Analytics</span>
          </div>
          <div className="icon-set">
            <img src={Workflows} alt="Workflows" className="icon-image" />
            <span className="icon-label">Workflows</span>
          </div>
          <div className="icon-set">
            <img src={DevHub} alt="Dev Hub" className="icon-image" />
            <span className="icon-label">Dev Hub</span>
          </div>
          <div className="icon-set">
            <img src={Account} alt="Acccount" className="icon-image" />
            <span className="icon-label">Account</span>
          </div>
          <div className="icon-set">
            <img
              src={ConsentManager}
              alt="Consent Manager"
              className="icon-image selected"
            />
            <span className="icon-label">Consent Manager</span>
          </div>
        </div>
      </div>

      <div className="thick-section">
        <h2 className="section-heading">Consent Manager</h2>
        <div className="subheadings-container">
          <div className="subheading-set selected-subheading">
            <img src={Demo} alt="Demo" className="sub-image" />
            <span className="selected-sub-label">Demo</span>
          </div>
          <div className="subheading-set">
            <img src={Configuration} alt="Demo" className="sub-image" />
            <span className="subheading-label">Configuration</span>
          </div>
          <div className="subheading-set">
            <img src={Search} alt="Demo" className="sub-image" />
            <span className="subheading-label">Search</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
