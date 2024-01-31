import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { KEY_USER_ID } from "../constants";
import styled from "styled-components";
import { getUserApi } from "../helper/userApi";
import { setUserLogin } from "../store/LoginSignupStore";

export default function LoginComponent() {
  const dispatch = useAppDispatch();
  const userLoggedIn: boolean = useAppSelector(
    (state) => state.loginSignup.userLoggedIn,
  );
  const userName: string = useAppSelector(
    (state) => state.loginSignup.username,
  );
  useEffect(() => {
    const userid =
      localStorage.getItem(KEY_USER_ID) ?? sessionStorage.getItem(KEY_USER_ID);
    console.log(userid, "----------------------------");
    if (userid != undefined) {
      getUserApi(userid).then((response) =>
        dispatch(
          setUserLogin({
            userId: response.data!.userId,
            firstName: response.data!.firstName ?? "Update Name",
            userEmail: response.data!.userEmail ?? "Update Email",
            userPhone: response.data!.userPhone ?? "Update Phone",
            haveHousing: response.data!.haveHousing ?? false,
            lookingForRoommates: response.data!.lookingForRoommates ?? true,
          }),
        ),
      );
    }
    // const username = localStorage.getItem(KEY_USER_NAME) ?? "";
    // const useremail = localStorage.getItem(KEY_USER_EMAIL) ?? "";
    // const userphone = localStorage.getItem(KEY_USER_PHONE) ?? "";
    // if (userid) {
    //   dispatch(
    //     setUserLogin({
    //       userId: userid,
    //       firstName: username,
    //       userEmail: useremail,
    //       userPhone: userphone,
    //     }),
    //   );
    // }
    // console.log("Please login again to continue");
  }, []);

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
