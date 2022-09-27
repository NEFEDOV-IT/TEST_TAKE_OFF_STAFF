import React from 'react';
import Form from "./Form";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch()

  const handleSignIn = (email: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error)
  }

  return (
    <>
      <Form title='Sign in' handleClick={handleSignIn}/>
    </>
  );
};

export default SignIn;