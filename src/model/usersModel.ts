export interface UsersDataModel {
  userPhone?: string;
  userId: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  userEmail?: string;
  hasHousing?: boolean;
  lookingForRoommates?: boolean;
}

export interface FirebaseResponseModel {
  message: string;
  data?: UsersDataModel;
  error: boolean;
}
