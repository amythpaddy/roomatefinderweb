import { createSlice } from "@reduxjs/toolkit";

export type UserProfileDataStoreParams = {
  userId: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  collegeEmail: string;
  userPhone: string;
  userAge: number;
  gender?: string;
  college?: string;
  major?: string;
  race?: string;
  distanceFromCollege?: string;
  havePet?: boolean;
  smoking?: boolean;
  countryOfOrigin?: string;
  availabilityDate: string;
  haveHousing?: boolean;
  lookingForRoommate?: boolean;
  loading: boolean;
  error: boolean;
  errorMessage?: string;
};

const initialState: UserProfileDataStoreParams = {
  userId: "",
  availabilityDate: "",
  college: "",
  collegeEmail: "",
  countryOfOrigin: "",
  distanceFromCollege: "",
  gender: "",
  havePet: false,
  lastName: "",
  major: "",
  race: "",
  smoking: false,
  userAge: 0,
  userPhone: "",
  firstName: "",
  middleName: "",
  haveHousing: false,
  lookingForRoommate: false,
  loading: true,
  error: false,
  errorMessage: "",
};

export const userProfileDataSlice = createSlice({
  name: "user-data",
  initialState,
  reducers: {
    updateUserProfileData: (state, action) => {
      state.firstName = action.payload.firstName ?? state.firstName;
      state.middleName = action.payload.middleName ?? state.middleName;
      state.lastName = action.payload.lastName ?? state.lastName;
      state.userPhone = action.payload.userPhone ?? state.userPhone;
      state.availabilityDate =
        action.payload.availabilityDate ?? state.availabilityDate;
      state.college = action.payload.college ?? state.college;
      state.collegeEmail = action.payload.collegeEmail ?? state.collegeEmail;
      state.countryOfOrigin =
        action.payload.countryOfOrigin ?? state.countryOfOrigin;
      state.distanceFromCollege =
        action.payload.distanceFromCollege ?? state.distanceFromCollege;
      state.gender = action.payload.gender ?? state.gender;
      state.havePet = action.payload.havePet ?? state.havePet;
      state.major = action.payload.major ?? state.major;
      state.race = action.payload.race ?? state.race;
      state.smoking = action.payload.smoking ?? state.smoking;
      state.userAge = action.payload.userAge ?? state.userAge;
      state.userPhone = action.payload.userPhone ?? state.userPhone;
      state.haveHousing = action.payload.haveHousing ?? state.haveHousing;
      state.lookingForRoommate =
        action.payload.lookingForRoommate ?? state.lookingForRoommate;
    },
    updateUserProfileStoreState: (state, action) => {
      state.loading = action.payload.loading ?? state.loading;
      state.error = action.payload.error ?? state.error;
      state.errorMessage = action.payload.errorMessage ?? state.errorMessage;
    },
  },
});

export const { updateUserProfileData, updateUserProfileStoreState } =
  userProfileDataSlice.actions;

export default userProfileDataSlice.reducer;
