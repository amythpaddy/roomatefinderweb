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
  haveHousing: boolean;
  lookingForRoommate: boolean;
  loading: boolean;
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
  haveHousing: false,
  lookingForRoommate: false,
  loading: false,
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
      state.userid = action.payload.userId;
      state.username = action.payload.firstName ?? "";
      state.phone = action.payload.userPhone;
      state.email = action.payload.userEmail ?? "";
      state.haveHousing = action.payload.hasHousing ?? false;
      state.lookingForRoommate = action.payload.lookingForRoommates ?? false;
      state.userLoggedIn = true;
    },
    removeLoggedUser: (state, action) => {
      state.userid = "";
      state.username = "";
      state.phone = "";
      state.userLoggedIn = false;
    },
    toggleHaveHousing: (state, action) => {
      state.haveHousing = !state.haveHousing;
    },
    toggleLookingForRoommate: (state, action) => {
      state.lookingForRoommate = !state.lookingForRoommate;
    },
    updateUserDataStore: (state, action) => {
      if (action.payload.username) {
        state.username = action.payload.username;
      }
      if (action.payload.userphone) {
        state.phone = action.payload.userphone;
      }
      if (action.payload.haveHousing) {
        state.haveHousing = action.payload.haveHousing;
      }
      if (action.payload.lookingForRoommate) {
        state.lookingForRoommate = action.payload.lookingForRoommate;
      }
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
  toggleHaveHousing,
  toggleLookingForRoommate,
  updateUserDataStore,
} = loginRegisterSlice.actions;
export default loginRegisterSlice.reducer;
