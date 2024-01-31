import axios from "axios";
import {
  ApiResponseModel,
  FirebaseResponseModel,
  UsersDataModel,
} from "../model/usersModel";

export const updateUserApi = async ({
  userId,
  firstName,
  middleName,
  lastName,
  userEmail,
  userPhone,
  haveHousing,
  lookingForRoommates,
}: UsersDataModel) => {
  await axios
    .put(
      `${process.env.REACT_APP_BASE_URL}/v1/updateUserDetail`,
      {
        userId,
        firstName,
        userPhone,
        haveHousing,
        lookingForRoommates,
      },
      {
        headers: { Authorization: `${userId}` },
      },
    )
    .then((value) => {
      return { success: true };
    })
    .catch((reason) => {
      return { success: false, message: "Error updating user data" };
    });
};

export const getUserApi = async (userid: string, currentUserId?: string) => {
  var response: FirebaseResponseModel = { error: false, message: "" };
  await axios
    .post(
      `${process.env.REACT_APP_BASE_URL}/v1/getUserDetail`,
      {
        userId: userid,
      },
      {
        headers: { Authorization: `${currentUserId ?? userid}` },
      },
    )
    .then((res): void => {
      response = {
        message: "User Data Found",
        data: {
          firstName: res.data.data.firstName,
          userId: res.data.data.userId,
          userPhone: res.data.data.userPhone,
          userEmail: res.data.data.userEmail,
          haveHousing: res.data.data.haveHousing,
          lookingForRoommates: res.data.data.lookingForRoommates,
        },
        error: false,
      };
    })
    .catch((error): void => {
      response = {
        message:
          "User Data Not Found, Please provide name and contact info from profile",
        error: false,
      };
    });
  return response;
};

export const getUserProfileDataApi = async (
  userid: string,
  currentUserId?: string,
) => {
  var response: ApiResponseModel = { error: false };
  await axios
    .post(
      `${process.env.REACT_APP_BASE_URL}/v1/getUserProfile`,
      {
        userId: userid,
      },
      {
        headers: { Authorization: `${currentUserId ?? userid}` },
      },
    )
    .then((res): void => {
      response = {
        message: "User Data Found",
        data: {
          firstName: res.data.data.firstName,
          lastName: res.data.data.lastName,
          middleName: res.data.data.middleName,
          userPhone: res.data.data.userPhone,
          college: res.data.data.college,
          major: res.data.data.major,
          age: res.data.data.age,
          distanceFromCollege: res.data.data.distanceFromCollege,
          countryOfOrigin: res.data.data.countryOfOrigin,
          gender: res.data.data.gender,
          haveHousing: res.data.data.haveHousing,
          lookingForRoommate: res.data.data.lookingForRoommate,
        },
        error: false,
      };
    })
    .catch((error): void => {
      response = {
        message:
          "User Data Not Found, Please provide name and contact info from profile",
        error: false,
      };
    });
  return response;
};
