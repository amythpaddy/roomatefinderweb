import { CreatePostModel, GetPostModel } from "../model/PostsModel";
import axios from "axios";

export const createPost = async ({
  userid,
  title,
  message,
}: CreatePostModel) => {
  await axios
    .post(
      `${process.env.REACT_APP_BASE_URL}/v1/createPost`,
      { title, message },
      {
        headers: { Authorization: `${userid}` },
      },
    )
    .then((value) => {
      console.log("the post was created");
    })
    .catch((reason) => {
      console.log({ type: "error" }, reason);
    });
};

export const getPost = async (): Promise<GetPostModel> => {
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
