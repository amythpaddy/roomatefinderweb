import { GetPostModel } from "../model/PostsModel";
import axios from "axios";

export const updateUserData = async (): Promise<GetPostModel> => {
  const postsData: GetPostModel = { error: false, message: "", data: [] };
  await axios
    .get(`${process.env.REACT_APP_BASE_URL}/v1/allPost`)
    .then((value) => {
      console.log("value", value);
      postsData.data = value.data;
    })
    .catch((reason) => {
      postsData.error = true;
      postsData.message = "Server error";
    });
  return postsData;
};
