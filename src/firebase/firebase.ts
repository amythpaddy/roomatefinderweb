import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  NextOrObserver,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { getFirebaseConfig } from "./firebase-config";
import axios from "axios";
import { FirebaseResponseModel } from "../model/usersModel";
import { getUserApi } from "../helper/userApi";

const app = initializeApp(getFirebaseConfig());
const auth = getAuth(app);

export const signInUser = async (
  email: string,
  password: string,
): Promise<FirebaseResponseModel> => {
  if (!email && !password)
    return { error: true, message: "email or password missing" };
  return signInWithEmailAndPassword(auth, email, password)
    .then(async (user): Promise<FirebaseResponseModel> => {
      return await getUserApi(user.user.uid);
    })
    .catch((error): FirebaseResponseModel => {
      switch (error.code) {
        case "auth/invalid-credential":
          return {
            message: "Invalid Username or Password",
            error: true,
          };
        default:
          return {
            message: "Error getting user",
            error: true,
          };
      }
    });
};

export const userStateListener = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback);
};

export const SignOutUser = async () => await signOut(auth);
export type NewUserDetails = {
  email: string;
  password: string;
  firstName: string;
  middleName: string | undefined;
  lastName: string;
  phone: string;
  collegeEmail: string;
};
export const newUser = async ({
  email,
  password,
  firstName,
  middleName,
  lastName,
  collegeEmail,
  phone,
}: NewUserDetails): Promise<FirebaseResponseModel> => {
  if (!email && !password) {
    return { error: true, message: "email or password missing" };
  }
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (newUser) => {
      var response: FirebaseResponseModel = { error: false, message: "" };
      await axios
        .post(`${process.env.REACT_APP_BASE_URL}/v1/createUser`, {
          userId: newUser.user.uid,
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          userEmail: newUser.user.email,
          userPhone: phone,
          collegeEmail: collegeEmail,
        })
        .then((res): void => {
          response = {
            message: "User Created Successfully",
            error: false,
          };
        })
        .catch((error): void => {
          response = {
            message:
              "User created but the info was not updated, Please enter the data via profile",
            error: true,
          };
        });
      return response;
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/email-already-in-use":
          return {
            message: "Email Already in Use",
            error: true,
          };
        default:
          return {
            message: "Error creating user",
            error: true,
          };
      }
    });
};
