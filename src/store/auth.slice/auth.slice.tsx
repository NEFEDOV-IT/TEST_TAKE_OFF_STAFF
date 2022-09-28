import { createSlice } from "@reduxjs/toolkit";
import { AUTH_EMAIL, AUTH_ID, getAuthStorage } from "../../storage";

const initialState = {
  email: getAuthStorage(AUTH_EMAIL) || null,
  id: getAuthStorage(AUTH_ID) || null,
  isLogged: !!getAuthStorage(AUTH_ID) || false,
}

const authSlice = createSlice({
  name: 'auth user',
  initialState,
  reducers: {
    addUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.isLogged = true;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
      state.isLogged = false;
      localStorage.clear()
    }
  }
})

export const { addUser, removeUser } = authSlice.actions
export const authReducer = authSlice.reducer
