import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth.slice/auth.slice";
import { usersReducer } from "./users.slice/users.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch