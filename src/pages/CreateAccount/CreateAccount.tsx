import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import SignUp from "../../components/SignUp/SignUp";
import './CreateAccount.scss'
import { useAppSelector } from "../../hooks/hooks";
import { getUser } from "../../utils/selectors";

const CreateAccount = () => {
  const { isLogged } = useAppSelector(getUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogged) {
      navigate('/')
    }
  })

  return (
    <main>
      <div className="create-account">
        <div className='container'>
          <h1 className='create-account__title'>Create Account</h1>
          <SignUp/>
          <p className='create-account__text'>Already have an account? <Link className='link' to='/login'>Sign in</Link></p>
        </div>
      </div>
    </main>
  );
};

export default CreateAccount;