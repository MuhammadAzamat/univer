import React, { useEffect } from 'react';
// reactstrap components
import AuthNavbar from '../navbars/AuthNavbar'

const Layout = ({ children }) => {
  return (
    <>
      <div className="main-content">
        <AuthNavbar />
        <div className="header bg-gradient-info py-7 py-lg-8">
          
          
        </div>
        {/* Page content */}
      </div>
    </>
  );
}

export default Layout