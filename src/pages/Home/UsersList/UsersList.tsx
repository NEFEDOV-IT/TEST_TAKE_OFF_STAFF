import React, { useEffect } from 'react';
import { fetchUsers } from "../../../store/asyncActions/asyncActions";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { getUsers } from "../../../utils/selectors";
import { IUser } from "../../../types/types";
import './UsersList.scss'
import UserCard from "./UserCard/UserCard";
import { getStorage, USERS_DATA } from "../../../utils/storage";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
  const users = useAppSelector(getUsers)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!getStorage(USERS_DATA)) {
      dispatch(fetchUsers())
    }
  }, [dispatch])

  function addContact() {
    navigate('/add-contact')
  }

  return (
    <main>
      <div className="users">
        <div className="users__body">
          <h1 className='users__title'>Users information:</h1>
          <button onClick={addContact} className="users__button-add">Add contact</button>
        </div>
        <ul className='users__list'>
          {users?.map((user: IUser) => {
            return <UserCard
              user={user}
              key={user.id}
            />
          })}
        </ul>
      </div>
    </main>
  );
};

export default UsersList;