import React from 'react';
import UsersList from "./UsersList/UsersList";
import './Users.scss'
import UsersHeader from "./UsersHeader/UsersHeader";

const Users = () => {

  return (
    <div className="users">
      <UsersHeader/>
      <UsersList/>
    </div>
  );
};

export default Users;