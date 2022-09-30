import React, { FC, useState } from 'react';
import Input from "../../../../../components/Input/Input";
import { IUser } from "../../../../../types/types";
import { useAppDispatch } from "../../../../../hooks/hooks";
import { editingUser, removeUser } from "../../../../../store/users.slice/users.slice";
import { AddContactSchema } from "../../../../../utils/validate";

interface IUserCard {
  user: IUser;
}

const UserCard: FC<IUserCard> = ({ user }) => {
  const dispatch = useAppDispatch()
  const [read, setRead] = useState<boolean>(true)
  const [editUser, setEditUser] = useState<IUser>(user)

  function changeRead() {
    setRead(!read)
  }

  async function handleContinue() {
    await AddContactSchema.validate(editUser)
      .catch(e => {
        alert(e.message)
        throw new Error('Error Validation')
      })
    changeRead()
    dispatch(editingUser(editUser))
  }

  function deleteUser() {
    dispatch(removeUser(user.id))
  }

  return (
    <li className='users__list-li'>
      <div className="li__user-info">
        <Input
          name={'Username: '}
          userParams={editUser.username}
          read={read}
          setEditUser={setEditUser}
          editUser={editUser}
        />
        <Input
          name={'Name: '}
          userParams={editUser.name}
          read={read}
          setEditUser={setEditUser}
          editUser={editUser}
        />
        <Input
          name={'Phone: '}
          userParams={editUser.phone}
          read={read}
          setEditUser={setEditUser}
          editUser={editUser}
        />
        <Input
          name={'E-mail: '}
          userParams={editUser.email}
          read={read}
          setEditUser={setEditUser}
          editUser={editUser}
        />
      </div>
      <div className="li__user-buttons">
        <button onClick={deleteUser} className='li__button-delete'>Delete</button>
        {
          read ?
            <button onClick={changeRead} className='li__button-edit'>Edit</button>
            :
            <button onClick={handleContinue} className='li__button-edit'>Continue</button>
        }
      </div>
    </li>
  );
};

export default UserCard;