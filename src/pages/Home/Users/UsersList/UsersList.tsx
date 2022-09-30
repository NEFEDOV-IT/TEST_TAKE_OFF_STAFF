import React, { useEffect } from 'react';
import { fetchUsers } from "../../../../store/asyncActions/asyncActions";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { getUsers } from "../../../../utils/selectors";
import { IUser } from "../../../../types/types";
import './UsersList.scss'
import UserCard from "./UserCard/UserCard";
import { getStorage, USERS_DATA } from "../../../../utils/storage";

const UsersList = () => {
  const users = useAppSelector(getUsers)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!getStorage(USERS_DATA)) {
      dispatch(fetchUsers())
    }
  }, [dispatch])

  return (
    <ul className='users__list'>
      {users?.map((user: IUser) => {
        return <UserCard
          user={user}
          key={user.id}
        />
      })}
    </ul>
  );
};

export default UsersList;