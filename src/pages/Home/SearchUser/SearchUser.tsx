import React, { ChangeEvent, FC } from 'react';
import './SearchUser.scss'
import { useAppDispatch } from "../../../hooks/hooks";
import { searchUser } from "../../../store/users.slice/users.slice";

const SearchUser: FC = () => {
  const dispatch = useAppDispatch()

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(searchUser(e.target.value))
  }

  return (
    <>
      <input
        className='home__search-user'
        type="text"
        placeholder='Search by name...'
        onChange={handleChange}
      />
    </>
  );
};

export default SearchUser;