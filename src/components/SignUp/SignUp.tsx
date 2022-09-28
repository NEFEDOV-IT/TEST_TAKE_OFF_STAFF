import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addUser } from "../../store/auth.slice/auth.slice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { FormValidation } from "../FormValidation/FormValidation";

const SignUp = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSignUp = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(response => {
        dispatch(addUser({
          email: response.user.email,
          id: response.user.uid,
        }))
        navigate('/login')
      })
      .catch(console.error)
  }

  return (
    <>
      <FormValidation title='Sign Up' handleClick={handleSignUp}/>
    </>
  );
};

export default SignUp;