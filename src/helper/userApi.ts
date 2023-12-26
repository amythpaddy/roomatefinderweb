import axios from "axios";
import { UsersDataModel } from "../model/usersModel";

export const updateUserApi = async ({
  userid,
  username,
  userphone,
  hasHousing,
  lookingForRoommates,
}: UsersDataModel) => {
  await axios
    .put(
      "http://localhost:3000/v1/updateUserDetail",
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
