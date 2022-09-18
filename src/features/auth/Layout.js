import React, { useEffect } from 'react';
// reactstrap components
import AuthNavbar from '../navbars/AuthNavbar'
import Login from './Login';
import Register from './Register/Register';

const Layout = ({ children }) => {
  return (
    <>
      <div className="main-content">
        {/* <AuthNavbar /> */}
        <Login />
        <div className="header bg-gradient-info py-7 py-lg-8">
          
          
        </div>
        {/* Page content */}
      </div>
    </>
  );
}

export default Layout