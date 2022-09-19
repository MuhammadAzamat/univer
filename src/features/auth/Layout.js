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

        {/* Page content */}
        {children}
      </div>
    </>
  );
}

export default Layout