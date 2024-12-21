import React from "react";
import Sidebar from "./Sidebar";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />

      <div className="main-content">{children}</div>
    </div>
  );
};

export default Layout;
