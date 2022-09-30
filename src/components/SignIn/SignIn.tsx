import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUserAccount } from "../../store/auth.slice/auth.slice";
import { useAppDispatch } from "../../hooks/hooks";
import { FormGeneral } from "../FormGeneral/FormGeneral";
import { AUTH_EMAIL, AUTH_ID, saveStorage } from "../../utils/storage";

const SignIn = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSignIn = (email: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(response => {
        saveStorage(AUTH_EMAIL, response.user.email)
        saveStorage(AUTH_ID, response.user.uid)
        dispatch(addUserAccount({
          email: response.user.email,
          id: response.user.uid,
        }))
        navigate('/')
      })
      .catch(() => alert('Error! Check your email or password.'))
  }

  return (
    <>
      <FormGeneral title='Sign in' handleClick={handleSignIn}/>
    </>
  );
};

export default SignIn;