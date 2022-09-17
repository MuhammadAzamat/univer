import React from 'react';
import { Link, useLocation, withRouter } from 'react-router-dom';

export default function WelcomePage({}) {
  const history = useLocation()
  return (
    <div className="home-welcome-page jumbotron">
      {/* {JSON.parse(localStorage.getItem('user')) ? history.push('/admin/index') : history.push('/auth/login')} */}
      {/* <Link to="auth/login">Войти в систему</Link> */}
      123
    </div>
  );
}
