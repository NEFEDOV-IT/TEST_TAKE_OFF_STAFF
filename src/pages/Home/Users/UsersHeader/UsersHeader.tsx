import React, { FC } from 'react';
import { useNavigate } from "react-router-dom";
import './UsersHeader.scss'

const UsersHeader: FC = () => {
  const navigate = useNavigate()

  function addContact() {
    navigate('/add-contact')
  }

  return (
    <div className="users__header">
      <h1 className='users__header-title'>Users information:</h1>
      <button onClick={addContact} className="users__header-button-add">Add contact</button>
    </div>
  );
};

export default UsersHeader;