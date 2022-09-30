import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addUserAccount } from "../../store/auth.slice/auth.slice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { FormGeneral } from "../FormGeneral/FormGeneral";

const SignUp = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSignUp = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(response => {
        dispatch(addUserAccount({
          email: response.user.email,
          id: response.user.uid,
        }))
        navigate('/login')
      })
      .catch(console.error)
  }

  return (
    <>
      <FormGeneral title='Sign Up' handleClick={handleSignUp}/>
    </>
  );
};

export default SignUp;