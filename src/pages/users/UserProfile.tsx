import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  toggleHaveHousing,
  toggleLookingForRoommate,
  updateUserDataStore,
} from "../../store/LoginSignupStore";
import { updateUserApi } from "../../helper/userApi";

export const UserProfile = () => {
  const [editProfile, setEditProfile] = useState(false);

  const username = useAppSelector((state) => state.loginSignup.username);
  const userphone = useAppSelector((state) => state.loginSignup.phone);
  const userid = useAppSelector((state) => state.loginSignup.userid);

  const lookingForRoommate = useAppSelector(
    (state) => state.loginSignup.lookingForRoommate,
  );
  const dispatch = useAppDispatch();
  const haveHousing: boolean = useAppSelector(
    (state) => state.loginSignup.haveHousing,
  );
  return (
    <LoginContainer>
      <div className={"m-5"}>
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your name
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          placeholder="Update your name"
          readOnly={!editProfile}
          className={`${
            editProfile ? "bg-white" : "bg-gray-50"
          } border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          onChange={(e) =>
            dispatch(updateUserDataStore({ username: e.target.value }))
          }
          required
        />
      </div>

      <div className={"m-5"}>
        <label
          htmlFor="userphone"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your phone number
        </label>
        <input
          type="tel"
          name="userphone"
          id="userphone"
          placeholder="Update your phone number"
          readOnly={!editProfile}
          value={userphone}
          className={`${
            editProfile ? "bg-white" : "bg-gray-50"
          } border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          onChange={(e) =>
            dispatch(updateUserDataStore({ userphone: e.target.value }))
          }
          required
        />
      </div>
      <div className={"m-5"}>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={haveHousing}
            onClick={() => editProfile && dispatch(toggleHaveHousing(null))}
            readOnly={!editProfile}
            className="sr-only peer"
          />
          <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Have you finalized a house
          </span>
        </label>
      </div>
      <div className={"m-5"}>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            readOnly={!editProfile}
            value=""
            className="sr-only peer"
            checked={lookingForRoommate}
            onClick={() =>
              editProfile && dispatch(toggleLookingForRoommate(null))
            }
          />
          <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Are you looking for a roommate?
          </span>
        </label>
      </div>
      {!editProfile ? (
        <center>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => setEditProfile(true)}
          >
            EDIT PROFILE
          </button>
        </center>
      ) : (
        <center>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => {
              updateUserApi({
                userid: userid,
                userphone: userphone,
                username: username,
                useremail: "",
                hasHousing: haveHousing,
                lookingForRoommates: lookingForRoommate,
              });
            }}
          >
            SAVE CHANGES
          </button>
          <button
            className="mx-5 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
            onClick={() => setEditProfile(false)}
          >
            CANCEL
          </button>
        </center>
      )}
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  margin: 50px 100px;
`;
