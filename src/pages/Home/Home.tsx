import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUserAccount } from "../../store/auth.slice/auth.slice";
import { getUser } from "../../utils/selectors";
import { useAppSelector } from "../../hooks/hooks";
import UsersList from "./UsersList/UsersList";
import './Home.scss'

const Home = () => {
  const { email, isLogged } = useAppSelector(getUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleCLick() {
    dispatch(removeUserAccount())
    navigate('/login')
  }

  useEffect(() => {
    if (!isLogged) {
      navigate('/register')
    }
  })

  return (
    <main>
      <div className="container">
        <div className="home">
          <div className="home__body">
            <h1 className='home__title'>Personal Area</h1>
            <button
              className='home__button'
              onClick={handleCLick}
            >
              Log out from <span>{email}</span>
            </button>
          </div>
          <hr/>

          <UsersList/>
        </div>
      </div>
    </main>
  )
};

export default Home;