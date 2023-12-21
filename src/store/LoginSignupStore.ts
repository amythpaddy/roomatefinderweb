import { createSlice } from "@reduxjs/toolkit";
import { UsersDataModel } from "../model/usersModel";

interface LoginRegisterState {
  login: boolean;
  email: string;
  password: string;
  username: string;
  userLoggedIn: boolean;
  userid: string;
  rememberUser: boolean;
  phone?: string;
}

const initialState: LoginRegisterState = {
  login: true,
  username: "",
  password: "",
  email: "",
  userLoggedIn: false,
  userid: "",
  rememberUser: false,
  phone: "",
};
export const loginRegisterSlice = createSlice({
  name: "login-signup",
  initialState,
  reducers: {
    toggleLoginScreen: (state, action: { payload: null; type: any }) => {
      state.login = !state.login;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    toggleRememberUser: (state, action: { payload: null; type: any }) => {
      state.rememberUser = !state.rememberUser;
    },
    setUserLogin: (state, action: { payload: UsersDataModel; type: any }) => {
      state.userid = action.payload.userid;
      state.username = action.payload.username;
      state.phone = action.payload.userphone;
      state.email = action.payload.useremail;
      state.userLoggedIn = true;
    },
    removeLoggedUser: (state, action) => {
      state.userid = "";
      state.username = "";
      state.phone = "";
      state.userLoggedIn = false;
    },
  },
});

export const {
  toggleLoginScreen,
  setEmail,
  setPassword,
  setUserLogin,
  removeLoggedUser,
  toggleRememberUser,
} = loginRegisterSlice.actions;
export default loginRegisterSlice.reducer;
