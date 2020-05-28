import React, {  useState } from 'react';
import SignIn from '../components/signin';
//test
const Login = (props) => {
  return (
    <div className="App">
      <SignIn login={props.loginState} setLogin = {props.setLogin}/>
    </div>
  );
};

export default Login;
