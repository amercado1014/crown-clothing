import React from 'react';

import Login from '../../components/login/login.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './login-and-register.styles.scss';

const LoginAndRegisterPage = () => (
  <div className='login-and-register'>
    <Login />
    <SignUp />
  </div>
)

export default LoginAndRegisterPage;
