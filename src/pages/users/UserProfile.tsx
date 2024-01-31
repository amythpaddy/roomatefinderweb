import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { UserDetailTextInput } from "./components/UserDetailInput";
import { DropdownInput } from "./components/DropdownInput";
import {
  updateUserProfileData,
  updateUserProfileStoreState,
} from "../../store/UserProfileDataStore";
import { ToggleboxInput } from "./components/ToggleboxInput";
import { getUserProfileDataApi } from "../../helper/userApi";

export const UserProfile = () => {
  const [editProfile, setEditProfile] = useState(false);

  const userProfileData = useAppSelector((state) => state.userProfileData);
  const userId = useAppSelector((state) => state.loginSignup.userid);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userId) {
      getUserProfileDataApi(userId).then((response) => {
        if (response.error) {
          dispatch(
            updateUserProfileStoreState({
              error: true,
              errorMessage: response.errorMessage,
              loading: false,
            }),
          );
        } else {
          dispatch(
            updateUserProfileData({
              userId: userId,
              availabilityDate: response.data.availabilityDate,
              college: response.data.college,
              collegeEmail: response.data.collegeEmail,
              countryOfOrigin: response.data.countryOfOrigin,
              distanceFromCollege: response.data.distanceFromCollege,
              gender: response.data.gender,
              havePet: response.data.havePet,
              lastName: response.data.lastName,
              major: response.data.major,
              race: response.data.race,
              smoking: response.data.smoking,
              userAge: response.data.userAge,
              userPhone: response.data.userPhone,
              firstName: response.data.firstName,
              middleName: response.data.middleName,
              haveHousing: response.data.haveHousing,
              lookingForRoommate: response.data.lookingForRoommate,
            }),
          );
          dispatch(updateUserProfileStoreState({ loading: false }));
        }
      });
    }
  }, [userId]);
  return (
    <LoginContainer>
      <UserDetailTextInput
        label={"First Name"}
        name={"firstName"}
        value={userProfileData.firstName}
        readOnly={!editProfile}
        onChange={(e: any) =>
          dispatch(updateUserProfileData({ firstName: e.target.value }))
        }
        required={false}
        placeholder={"John"}
      />
      <UserDetailTextInput
        label={"Middle Name"}
        name={"middleName"}
        value={userProfileData.middleName ?? ""}
        readOnly={!editProfile}
        onChange={(e: any) =>
          dispatch(updateUserProfileData({ middleName: e.target.value }))
        }
        required={false}
        placeholder={"Mid"}
      />
      <UserDetailTextInput
        label={"Last Name"}
        name={"lastName"}
        value={userProfileData.lastName}
        readOnly={!editProfile}
        onChange={(e: any) =>
          dispatch(updateUserProfileData({ lastName: e.target.value }))
        }
        required={false}
        placeholder={"Doe"}
      />
      <UserDetailTextInput
        label={"Phone Number"}
        name={"userphone"}
        value={userProfileData.userPhone}
        readOnly={!editProfile}
        onChange={(e: any) =>
          dispatch(updateUserProfileData({ userPhone: e.target.value }))
        }
        required={false}
        placeholder={"Update your phone number"}
      />

      <UserDetailTextInput
        label={"College"}
        name={"college"}
        value={userProfileData.college ?? ""}
        readOnly={!editProfile}
        onChange={(e: any) =>
          dispatch(updateUserProfileData({ college: e.target.value }))
        }
        required={false}
        placeholder={"Update your College/University"}
      />

      <UserDetailTextInput
        label={"Course Major"}
        name={"major"}
        value={userProfileData.major ?? ""}
        readOnly={!editProfile}
        onChange={(e: any) =>
          dispatch(updateUserProfileData({ major: e.target.value }))
        }
        required={false}
        placeholder={"Update your Major"}
      />

      <UserDetailTextInput
        label={"Age"}
        name={"age"}
        value={userProfileData.userAge ?? 0}
        readOnly={!editProfile}
        onChange={(e: any) =>
          dispatch(updateUserProfileData({ userAge: e.target.value }))
        }
        required={false}
        placeholder={"Update your phone number"}
      />

      <UserDetailTextInput
        label={"Distance From College"}
        name={"distace"}
        value={userProfileData.distanceFromCollege ?? ""}
        readOnly={!editProfile}
        onChange={(e: any) =>
          dispatch(
            updateUserProfileData({ distanceFromCollege: e.target.value }),
          )
        }
        required={false}
        placeholder={"How far are you willing to live?"}
      />

      <UserDetailTextInput
        label={"Country"}
        name={"country"}
        value={userProfileData.countryOfOrigin ?? ""}
        readOnly={!editProfile}
        onChange={(e: any) =>
          dispatch(updateUserProfileData({ countryOfOrigin: e.target.value }))
        }
        required={false}
        placeholder={"What country are you from?"}
      />

      <DropdownInput
        name={"gender"}
        displayName={"Gender"}
        onChoose={() => {}}
        options={[
          { name: "male", value: "Male" },
          { name: "female", value: "Female" },
          { name: "other", value: "Other" },
          { name: "na", value: "Do no want to say." },
        ]}
      />

      <ToggleboxInput
        checked={userProfileData.haveHousing ?? false}
        onToggle={() =>
          dispatch(
            updateUserProfileData({
              haveHousing: !userProfileData.haveHousing,
            }),
          )
        }
        label={"Have you finalised Housing?"}
        readOnly={!editProfile}
      />

      <ToggleboxInput
        checked={userProfileData.lookingForRoommate ?? false}
        onToggle={() =>
          dispatch(
            updateUserProfileData({
              lookingForRoommate: !userProfileData.lookingForRoommate,
            }),
          )
        }
        label={"Are you looking for a roommate?"}
        readOnly={!editProfile}
      />
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
              // updateUserApi({
              //   userId: userid,
              //   userPhone: userphone,
              //   firstName: username,
              //   userEmail: "",
              //   hasHousing: haveHousing,
              //   lookingForRoommates: lookingForRoommate,
              // });
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
