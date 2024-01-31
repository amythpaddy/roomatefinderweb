export interface UsersDataModel {
  userPhone?: string;
  userId: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  userEmail?: string;
  haveHousing?: boolean;
  lookingForRoommates?: boolean;
}

export interface FirebaseResponseModel {
  message: string;
  data?: UsersDataModel;
  error: boolean;
}

export type ApiResponseModel = {
  message?: string;
  data?: any;
  error: boolean;
  errorMessage?: string;
  errorCode?: number;
};
