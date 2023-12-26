import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  KEY_USER_EMAIL,
  KEY_USER_ID,
  KEY_USER_NAME,
  KEY_USER_PHONE,
} from "../constants";
import { setUserLogin } from "../store/LoginSignupStore";
import styled from "styled-components";

export default function LoginComponent() {
  const dispatch = useAppDispatch();
  const userLoggedIn: boolean = useAppSelector(
    (state) => state.loginSignup.userLoggedIn,
  );
  const userName: string = useAppSelector(
    (state) => state.loginSignup.username,
  );
  useEffect(() => {
    const userid = localStorage.getItem(KEY_USER_ID) ?? "";
    const username = localStorage.getItem(KEY_USER_NAME) ?? "";
    const useremail = localStorage.getItem(KEY_USER_EMAIL) ?? "";
    const userphone = localStorage.getItem(KEY_USER_PHONE) ?? "";
    if (userid.length) {
      dispatch(
        setUserLogin({
          userid: userid,
          username: username,
          useremail: useremail,
          userphone: userphone,
        }),
      );
    }
  });

  return (
    <ActionItem>
      {userLoggedIn ? (
        <a href={"/user-profile"}>{userName}</a>
      ) : (
        <a href={"/login"}>Login</a>
      )}
    </ActionItem>
  );
}

const ActionItem = styled.span`
  font-weight: bold;
  padding: 5px;
  margin: 0 5px;
`;
