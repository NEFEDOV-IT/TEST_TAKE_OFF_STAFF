import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/types";
import { getStorage, saveStorage, USERS_DATA } from "../../utils/storage";

interface IUsersSettings {
  users: IUser[] | [],
  searchValue: string,
}

const initialState: IUsersSettings = {
  users: getStorage(USERS_DATA) || [],
  searchValue: '',
}


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers(state, action) {
      saveStorage(USERS_DATA, action.payload)
      state.users = action.payload
    },
    removeUser(state, action) {
      const filterState = state.users.filter(item => item.id !== action.payload)
      saveStorage(USERS_DATA, filterState)
      state.users = filterState
    },
    addContact(state, action) {
      const newState = state.users.concat(action.payload)
      saveStorage(USERS_DATA, newState)
      state.users = newState
    },
    editingUser(state, action) {
      const index = state.users.findIndex(item => item.id === action.payload.id)
      state.users[index] = action.payload
      saveStorage(USERS_DATA, state.users)
    },
    searchUser(state, action) {
      state.searchValue = action.payload
    },
  }
})

export const usersReducer = usersSlice.reducer
export const { addUsers, removeUser, addContact, editingUser, searchUser } = usersSlice.actions