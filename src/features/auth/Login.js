import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input, InputNumber } from 'antd';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router';
import { loginAction } from './query';

// reactstrap components
// import { isValidEmail } from "../../extrafunc";

export default function Login() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const history = useHistory()
  
  useEffect(() => {
    document.title = 'Admission - Signin';
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
    <div className='login_parent'>
      <div className='form_parent'>
        <div>
        </div>
      <h1>Tizimga kirish</h1>
       <Form
      name="basic"
      className='form'
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        className='username'
        name="tel"
        rules={[
          {
            required: true,
            message: 'Incorrect number!',
          },
        ]}
      >
        <InputNumber  className='username_input'/>
      </Form.Item>

      <Form.Item
        name="password"
        className='password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password  className='password_input'/>
      </Form.Item>



   
        <Button type='primary'  htmlType="submit" className='submit'>
          Tizimga kirish
        </Button>
    </Form>
    </div>
    </div>
    </>
  ); 
}

