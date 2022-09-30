import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getUser } from "../../utils/selectors";
import { useAppSelector } from "../../hooks/hooks";
import './Home.scss'
import Users from "./Users/Users";
import HomeHeader from "./HomeHeader/HomeHeader";
import SearchUser from "./SearchUser/SearchUser";

const Home = () => {
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