import axios from "axios";
import { FirebaseResponseModel, UsersDataModel } from "../model/usersModel";

export const updateUserApi = async ({
  userId,
  firstName,
  middleName,
  lastName,
  userEmail,
  userPhone,
  hasHousing,
  lookingForRoommates,
}: UsersDataModel) => {
  await axios
    .put(
      `${process.env.REACT_APP_BASE_URL}/v1/updateUserDetail`,
      {
        userId,
        firstName,
        userPhone,
        hasHousing,
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
          hasHousing: res.data.data.hasHousing,
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
