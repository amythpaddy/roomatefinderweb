import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setUserLogin, toggleLoginScreen } from "../../store/LoginSignupStore";
import Login from "./component/login";
import Signup from "./component/signup";
import { newUser, NewUserDetails, signInUser } from "../../firebase/firebase";
import { FirebaseResponseModel } from "../../model/usersModel";
import {
  KEY_USER_EMAIL,
  KEY_USER_ID,
  KEY_USER_NAME,
  KEY_USER_PHONE,
} from "../../constants";
import { CircularProgressSpinner } from "../../helper/CircularProgressSpinner";
import { Navigate } from "react-router";

function LoginSignup() {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const loginScreen = useAppSelector((state) => state.loginSignup.login);
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  return (
    <div>
      {loading && (
        <div
          className={"h-screen w-screen flex items-center justify-center fixed"}
        >
          <CircularProgressSpinner />
        </div>
      )}
      {loginScreen ? (
        <Login
          toggleLoginScreen={() => dispatch(toggleLoginScreen(null))}
          loading={loading}
          loginUser={(
            email: string,
            password: string,
            rememberUser: boolean,
          ) => {
            signInUser(email, password).then((response) => {
              setLoading(true);
              if (response.data && !response.error) {
                if (rememberUser) {
                  localStorage.setItem(KEY_USER_ID, response.data!.userId);
                  localStorage.setItem(
                    KEY_USER_NAME,
                    response.data!.firstName ?? "",
                  );
                  localStorage.setItem(
                    KEY_USER_EMAIL,
                    response.data!.userEmail ?? "",
                  );
                  localStorage.setItem(
                    KEY_USER_PHONE,
                    response.data!.userPhone ?? "",
                  );
                } else {
                  console.log(response.data);
                  sessionStorage.setItem(KEY_USER_ID, response.data!.userId);
                  sessionStorage.setItem(
                    KEY_USER_NAME,
                    response.data!.firstName ?? "",
                  );
                  sessionStorage.setItem(
                    KEY_USER_EMAIL,
                    response.data!.userEmail ?? "",
                  );
                  sessionStorage.setItem(
                    KEY_USER_PHONE,
                    response.data!.userPhone ?? "",
                  );
                }
                dispatch(
                  setUserLogin({
                    userId: response.data!.userId,
                    firstName: response.data!.firstName,
                    middleName: response.data!.middleName,
                    userPhone: response.data!.userPhone,
                    hasHousing: response.data!.hasHousing ?? false,
                    lookingForRoommates:
                      response.data!.lookingForRoommates ?? true,
                  }),
                );
              }
              <Navigate replace to={"/"} />;
            });
          }}
        />
      ) : (
        <Signup
          toggleSignupScreen={() => dispatch(toggleLoginScreen(null))}
          loading={loading}
          createUser={async (newUserDetails: NewUserDetails) => {
            setLoading(true);
            const response: FirebaseResponseModel =
              await newUser(newUserDetails);
            if (response.error) {
              setError(true);
              setMessage(response.message);
            } else {
              setError(false);
              setMessage(response.message);
            }
            setLoading(false);
          }}
        />
      )}
    </div>
  );
}

export default LoginSignup;
