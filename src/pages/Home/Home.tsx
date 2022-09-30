import React, { FC, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getUser } from "../../utils/selectors";
import { useAppSelector } from "../../hooks/hooks";
import Users from "./Users/Users";
import HomeHeader from "./HomeHeader/HomeHeader";
import SearchUser from "./SearchUser/SearchUser";
import './Home.scss'

const Home: FC = () => {
  const { isLogged } = useAppSelector(getUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogged) {
      navigate('/register')
    }
  })

  return (
    <main>
      <div className="container">
        <div className="home">
          <HomeHeader/>
          <SearchUser/>
          <Users/>
        </div>
      </div>
    </main>
  )
};

export default Home;