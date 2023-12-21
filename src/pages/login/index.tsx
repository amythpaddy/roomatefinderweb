import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setUserLogin, toggleLoginScreen } from "../../store/LoginSignupStore";
import Login from "./component/login";
import Signup from "./component/signup";
import { newUser, signInUser } from "../../firebase/firebase";
import NotificationBox from "../sharedComponents/NotificationBox";
import { Link } from "react-router-dom";
import { FirebaseResponseModel } from "../../model/usersModel";
import {
  KEY_USER_EMAIL,
  KEY_USER_ID,
  KEY_USER_NAME,
  KEY_USER_PHONE,
} from "../../constants";

function LoginSignup() {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const loginScreen = useAppSelector((state) => state.loginSignup.login);

  const dispatch = useAppDispatch();
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link to="#">
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
        </Link>
        {loginScreen ? (
          <Login
            toggleLoginScreen={() => dispatch(toggleLoginScreen(null))}
            loginUser={(
              email: string,
              password: string,
              rememberUser: boolean,
            ) => {
              signInUser(email, password).then((response) => {
                if (response.data && !response.error) {
                  if (rememberUser) {
                    localStorage.setItem(KEY_USER_ID, response.data!.userid);
                    localStorage.setItem(
                      KEY_USER_NAME,
                      response.data!.username,
                    );
                    localStorage.setItem(
                      KEY_USER_EMAIL,
                      response.data!.useremail,
                    );
                    localStorage.setItem(
                      KEY_USER_PHONE,
                      response.data!.userphone ?? "",
                    );
                  } else {
                    sessionStorage.setItem(KEY_USER_ID, response.data!.userid);
                    sessionStorage.setItem(
                      KEY_USER_NAME,
                      response.data!.username,
                    );
                    sessionStorage.setItem(
                      KEY_USER_EMAIL,
                      response.data!.useremail,
                    );
                    sessionStorage.setItem(
                      KEY_USER_PHONE,
                      response.data!.userphone ?? "",
                    );
                  }
                  dispatch(
                    setUserLogin({
                      userid: response.data!.userid,
                      username: response.data!.username,
                      useremail: response.data!.useremail,
                      userphone: response.data!.userphone,
                    }),
                  );
                }
              });
            }}
          />
        ) : (
          <Signup
            toggleSignupScreen={() => dispatch(toggleLoginScreen(null))}
            createUser={async (
              email: string,
              password: string,
              username: string,
              phone: string | undefined,
            ) => {
              const response: FirebaseResponseModel = await newUser(
                email,
                password,
                username,
                phone,
              );
              if (response.error) {
                setError(true);
                setMessage(response.message);
              } else {
                setError(false);
                setMessage(response.message);
              }
            }}
          />
        )}
      </div>
      <NotificationBox
        title={error ? "Error" : "Success"}
        error={error}
        message={message}
      />
    </section>
  );
}

export default LoginSignup;
