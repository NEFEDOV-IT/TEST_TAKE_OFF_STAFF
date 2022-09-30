import React, { FC, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import SignUp from "../../components/SignUp/SignUp";
import './CreateAccount.scss'
import { useAppSelector } from "../../hooks/hooks";
import { getUser } from "../../utils/selectors";

const CreateAccount: FC = () => {
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
          <div className="create-account__body">
            <h1 className='create-account__body-title'>Create Account</h1>
            <SignUp/>
            <p className='create-account__body-text'>Already have an account? <Link className='link' to='/login'>Sign in</Link></p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateAccount;