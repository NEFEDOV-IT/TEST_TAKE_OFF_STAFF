import React from 'react';
import { Link } from "react-router-dom";
import SignIn from "../../components/SignIn/SignIn";
import './Login.scss'

const Login = () => {
  return (
    <main>
      <div className="login">
        <div className='container'>
          <h1 className="login__title">Login</h1>
          <SignIn/>
          <p className="login__text">
            New to the site? <Link className='link' to='/register'>Create your account</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;