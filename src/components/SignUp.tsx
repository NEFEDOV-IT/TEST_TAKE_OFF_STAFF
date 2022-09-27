import React from 'react';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import Form from "./Form";
import {useDispatch} from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch()

  const handleSignUp = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error)
  }

  return (
    <>
      <Form title='Sign Up' handleClick={handleSignUp}/>
    </>
  );
};

export default SignUp;