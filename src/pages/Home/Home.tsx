import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { removeUser } from "../../store/auth.slice/auth.slice";
import { getUser } from "../../selectors";
import { useAppSelector } from "../../hooks/hooks";
import UsersInfo from "./UsersInfo";

const Home = () => {
  const { email, isLogged } = useAppSelector(getUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogged) {
      navigate('/register')
    }
  })

  return (
    <main>
      <h1>Hello World!</h1>
      <button
        onClick={() => {
          dispatch(removeUser())
          navigate('/register')
        }}
      >
        Log out from {email}
      </button>

      <UsersInfo/>
    </main>
  )
};

export default Home;