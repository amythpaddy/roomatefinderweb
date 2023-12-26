export interface UsersDataModel {
  userphone?: string;
  userid: string;
  username: string;
  useremail: string;
  hasHousing?: boolean;
  lookingForRoommates?: boolean;
}

export interface FirebaseResponseModel {
  message: string;
  data?: UsersDataModel;
  error: boolean;
}
