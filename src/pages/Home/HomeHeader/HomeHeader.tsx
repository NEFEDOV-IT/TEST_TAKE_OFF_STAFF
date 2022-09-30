import React from 'react';
import './HomeHeader.scss'
import { removeUserAccount } from "../../../store/auth.slice/auth.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hooks";
import { getUser } from "../../../utils/selectors";

const HomeHeader = () => {
  const { email } = useAppSelector(getUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleCLick() {
    dispatch(removeUserAccount())
    navigate('/login')
  }

  return (
    <>
      <div className="home__header">
        <h1 className='home__header-title'>Personal Area</h1>
        <button
          className='home__header-button'
          onClick={handleCLick}
        >
          Log out from <span>{email}</span>
        </button>
      </div>
      <hr/>
    </>
  );
};

export default HomeHeader;