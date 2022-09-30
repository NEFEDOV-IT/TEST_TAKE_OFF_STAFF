import React, { ChangeEvent, FC, useState } from 'react';
import './Input.scss'
import { IUser } from "../../types/types";

interface IInput {
  userParams: string | number | undefined;
  name: string;
  read: boolean;
  setEditUser: (editUser: IUser) => void;
  editUser: IUser;
}

const Input: FC<IInput> = ({ userParams, name, read, setEditUser, editUser }) => {
  const [valueUser, setValueUser] = useState<string | number | undefined>(userParams)
  const edit: string = read ? '' : 'active';

  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (name === 'Username: ') setEditUser({ ...editUser, username: e.target.value })
    if (name === 'Name: ') setEditUser({ ...editUser, name: e.target.value })
    if (name === 'Phone: ') setEditUser({ ...editUser, phone: e.target.value })
    if (name === 'E-mail: ') setEditUser({ ...editUser, email: e.target.value })

    setValueUser(e.target.value)
  }

  return (
    <>
      <label className={'form__input-label'} htmlFor={name}>{name}</label>
      <input
        className={`form__input ${edit}`}
        name={name}
        value={valueUser}
        readOnly={read}
        onChange={HandleChange}
        type='text'
      />
    </>
  );
};

export default Input;