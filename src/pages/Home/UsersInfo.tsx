import React, { useEffect } from 'react';
import { fetchUsers } from "../../store/asyncActions/asyncActions";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getUser, getUsers } from "../../selectors";
import { IUsers } from "../../types/types";

const UsersInfo = () => {
  const users = useAppSelector(getUsers)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <>
      <h2>Hello</h2>
      <ul>
        {users?.map((user: IUsers) => {
          return <li key={user.id}>
            <div>
              ID: {user.id}
            </div>
            <div>
              Name: {user.name}
            </div>
            <div>
              Login: {user.login}
            </div>
            <div>
              E-mail: {user.email}
            </div>
          </li>
        })}
      </ul>
    </>
  );
};

export default UsersInfo;