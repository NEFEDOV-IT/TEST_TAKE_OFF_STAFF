import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/types";
import { getStorage, saveStorage, USERS_DATA } from "../../utils/storage";

const initialState: IUser[] | [] = getStorage(USERS_DATA) || []

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers(state, action) {
      saveStorage(USERS_DATA, action.payload)
      return state = action.payload
    },
    removeUser(state, action) {
      const filterState = state.filter(item => item.id !== action.payload)
      saveStorage(USERS_DATA, filterState)
      return filterState
    },
    addContact(state, action) {
      const newState = state.concat(action.payload)
      saveStorage(USERS_DATA, newState)
      return newState
    },
    editingUser(state, action) {
      const index = state.findIndex(item => item.id === action.payload.id)
      state[index] = action.payload
      saveStorage(USERS_DATA, state)
    },
  }
})

export const usersReducer = usersSlice.reducer
export const { addUsers, removeUser, addContact, editingUser } = usersSlice.actions