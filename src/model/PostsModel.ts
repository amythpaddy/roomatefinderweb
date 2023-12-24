import { UsersDataModel } from "./usersModel";

export interface CreatePostModel {
  userid: string;
  title: string;
  message: string;
  userdata?: UsersDataModel;
}

export interface GetPostModel {
  error: boolean;
  message: string;
  data: CreatePostModel[];
}
