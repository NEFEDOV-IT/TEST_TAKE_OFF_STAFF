import React, { FC, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import SignIn from "../../components/SignIn/SignIn";
import './Login.scss'
import { useAppSelector } from "../../hooks/hooks";
import { getUser } from "../../utils/selectors";

const Login: FC = () => {
  const { isLogged } = useAppSelector(getUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogged) {
      navigate('/')
    }
  })

  return (
    <main>
      <div className="login">
        <div className='container'>
          <div className="login__body">
            <h1 className="login__body-title">Login</h1>
            <SignIn/>
            <p className="login__body-text">
              New to the site? <Link className='link' to='/register'>Create your account</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;