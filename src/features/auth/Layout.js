import React, { useEffect } from "react";
// reactstrap components
import Login from "./login";
import AuthNavbar from "../navbars/AuthNavbar";
import Register from "./Register/Register";

const Layout = ({ children }) => {
  return (
    <>
      <div className="main-content">
        {/* <AuthNavbar /> */}
        {/* Page content */}
        {children}
      </div>
    </>
  );
};

export default Layout;
