import React, { useEffect } from 'react';

import { useMutation } from 'react-query';
import { useHistory } from 'react-router';
import { loginAction } from './query';

// reactstrap components
// import { isValidEmail } from "../../extrafunc";

export default function Login() {

  const history = useHistory()
  
  useEffect(() => {
    document.title = 'Network - Signin';
    localStorage.removeItem('jwt')
    localStorage.removeItem('user')
  }, [])

  const [loginMut, login] = useMutation(loginAction);

  const onSubmit = async (data) => {
    const res = await loginMut(data);
    if (res) {
      if (!window.location.origin.includes('localhost')) {
        // await notifyMut();
      }
      history.push('/admin');
    }
    if (!res) {
      console.log(res, "flag")
      return {
      }
    } else if (data.remember) {
      localStorage.setItem('remember_me', JSON.stringify(data.remember));
    } else { localStorage.removeItem('remember_me') }
  }

  return (
    <>
      
    </>
  ); 
}

