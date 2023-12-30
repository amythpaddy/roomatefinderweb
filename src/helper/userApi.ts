import axios from "axios";
import { FirebaseResponseModel, UsersDataModel } from "../model/usersModel";

export const updateUserApi = async ({
  userid,
  username,
  userphone,
  hasHousing,
  lookingForRoommates,
}: UsersDataModel) => {
  await axios
    .put(
      `${process.env.REACT_APP_BASE_URL}/v1/updateUserDetail`,
      {
        userid,
        username,
        userphone,
        hasHousing,
        lookingForRoommates,
      },
      {
        headers: { Authorization: `${userid}` },
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
        userid: userid,
      },
      {
        headers: { Authorization: `${currentUserId ?? userid}` },
      },
    )
    .then((res): void => {
      response = {
        message: "User Data Found",
        data: {
          username: res.data.data.username,
          userid: res.data.data.userid,
          userphone: res.data.data.userphone,
          useremail: res.data.data.useremail,
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
