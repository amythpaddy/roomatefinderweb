export interface UsersDataModel {
  userphone?: string;
  userid: string;
  username: string;
  useremail: string;
}

export interface FirebaseResponseModel {
  message: string;
  data?: UsersDataModel;
  error: boolean;
}
