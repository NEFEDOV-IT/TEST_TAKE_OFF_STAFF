import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../store/auth.slice/auth.slice";
import { useAppDispatch } from "../../hooks/hooks";
import { FormValidation } from "../FormValidation/FormValidation";
import { AUTH_EMAIL, AUTH_ID, saveAuthStorage } from "../../storage";

const SignIn = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSignIn = (email: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(response => {
        saveAuthStorage(AUTH_EMAIL, response.user.email)
        saveAuthStorage(AUTH_ID, response.user.uid)
        dispatch(addUser({
          email: response.user.email,
          id: response.user.uid,
        }))
        navigate('/')
      })
      .catch(() => alert('Error! Check your email or password.'))
  }

  return (
    <>
      <FormValidation title='Sign in' handleClick={handleSignIn}/>
    </>
  );
};

export default SignIn;