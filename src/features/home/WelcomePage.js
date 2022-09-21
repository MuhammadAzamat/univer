import React, { useEffect } from "react";
import { Link, useHistory, useLocation, withRouter } from "react-router-dom";

export default function WelcomePage({ children }) {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("Authorization") || "";
    if (token) {
      window.location.pathname = "/admin/index";
    } else {
      window.location.pathname = "/auth/login";
    }
    // window.location = JSON.parse(localStorage.getItem("Authorization"))
    //   ? "/admin/index"
    //   : "/auth/login";
  }, []);
  return (
    <div className="home-welcome-page jumbotron">
      {/* {JSON.parse(localStorage.getItem('user')) ? history.push('/admin/index') : history.push('/auth/login')} */}
      {/* <Link to="auth/login">Войти в систему</Link> */}

      {children}
    </div>
  );
}
