import React from 'react';
import {Link} from "react-router-dom";
import SignIn from "../components/SignIn";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <SignIn/>
      <p>
        Or <Link to='/register'>Register</Link>
      </p>
    </div>
  );
};

export default Login;