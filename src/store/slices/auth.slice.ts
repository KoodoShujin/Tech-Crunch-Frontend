import { IUser } from "@/@types/interfaces/user.interface";
import { createSlice } from "@reduxjs/toolkit";

export interface IAuthInitialState {
  token: string;
  user: IUser;
}

const authInitialState: IAuthInitialState = {
  token: "",
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setAuthCredientials: (state) => {},
    clearAuthCredentials: (state) => {},
  },
});

export const { setAuthCredientials, clearAuthCredentials } = authSlice.actions;

export default authSlice;
