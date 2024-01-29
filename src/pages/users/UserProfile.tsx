import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  toggleHaveHousing,
  toggleLookingForRoommate,
  updateUserDataStore,
} from "../../store/LoginSignupStore";
import { updateUserApi } from "../../helper/userApi";
import { UserDetailTextInput } from "./components/UserDetailInput";

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
      <UserDetailTextInput
        label={"Your Name"}
        name={"username"}
        value={username}
        readOnly={!editProfile}
        onChange={(e: any) =>
          dispatch(updateUserDataStore({ username: e.target.value }))
        }
        required={false}
        placeholder={"Update your name"}
      />
      <UserDetailTextInput
        label={"Phone Number"}
        name={"userphone"}
        value={userphone ?? ""}
        readOnly={!editProfile}
        onChange={(e: any) =>
          dispatch(updateUserDataStore({ userphone: e.target.value }))
        }
        required={false}
        placeholder={"Update your phone number"}
      />

      <UserDetailTextInput
        label={"College"}
        name={"college"}
        value={userphone ?? ""}
        readOnly={!editProfile}
        onChange={(e: any) =>
          dispatch(updateUserDataStore({ userphone: e.target.value }))
        }
        required={false}
        placeholder={"Update your phone number"}
      />

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
                userId: userid,
                userPhone: userphone,
                firstName: username,
                userEmail: "",
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
