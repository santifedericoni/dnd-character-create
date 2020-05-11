import React from 'react';
import UserLIst from '../components/users/usersList';
import SignIn from '../components/signin';
import AppBar from '../components/navbar'

const Login = () => {
  return (
    <div className="App">
      
      <AppBar/>
        <SignIn />
    </div>
  );
};

export default Login;
