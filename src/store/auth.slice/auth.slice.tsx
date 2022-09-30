import { createSlice } from "@reduxjs/toolkit";
import { AUTH_EMAIL, AUTH_ID, getStorage, removeStorage } from "../../utils/storage";
import { IUserAccount } from "../../types/types";

const initialState: IUserAccount = {
  email: getStorage(AUTH_EMAIL) || null,
  id: getStorage(AUTH_ID) || null,
  isLogged: !!getStorage(AUTH_ID) || false,
}

const authSlice = createSlice({
  name: 'auth user',
  initialState,
  reducers: {
    addUserAccount(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    userSignIn(state) {
      state.isLogged = true;
    },
    removeUserAccount(state) {
      state.email = null;
      state.id = null;
      state.isLogged = false;
      removeStorage(AUTH_ID)
      removeStorage(AUTH_EMAIL)
    }
  }
})

export const { addUserAccount, removeUserAccount, userSignIn } = authSlice.actions
export const authReducer = authSlice.reducer
