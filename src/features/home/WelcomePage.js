import React, { useEffect } from 'react';
import { Link, useHistory, useLocation, withRouter } from 'react-router-dom';

export default function WelcomePage({ children }) {
  const history = useHistory()
  useEffect(() => {
    window.location = JSON.parse(localStorage.getItem('user')) ?  ('/admin/index') : ('/auth/login')

  }, [])
  return (
    <div className="home-welcome-page jumbotron">
      {/* {JSON.parse(localStorage.getItem('user')) ? history.push('/admin/index') : history.push('/auth/login')} */}
      {/* <Link to="auth/login">Войти в систему</Link> */}

      {children}
    </div>
  );
}
