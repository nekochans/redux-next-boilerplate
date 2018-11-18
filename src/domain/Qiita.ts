import {
  requestToAuthenticatedQiitaUserApi,
  requestToQiitaUserApi
} from "../api/QiitaApi";

export interface IFetchQiitaUserRequest {
  id: string;
}

export interface IFetchQiitaUserResponse {
  id: string;
  profile_image_url: string;
}

export interface IFetchAuthenticatedQiitaUserRequest {
  accessToken: string;
}

export interface IFetchAuthenticatedQiitaUserResponse
  extends IFetchQiitaUserResponse {}

export interface IFetchQiitaUserFailureResponse {
  // TODO このErrorは独自定義のErrorにするべき
  error: Error;
}

export interface IFetchAuthenticatedQiitaUserFailureResponse {
  // TODO このErrorは独自定義のErrorにするべき
  error: Error;
}

export const fetchUser = async (
  request: IFetchQiitaUserRequest
): Promise<IFetchQiitaUserResponse> => {
  return await requestToQiitaUserApi(request);
};

export const fetchAuthenticatedUser = async (
  request: IFetchAuthenticatedQiitaUserRequest
): Promise<IFetchAuthenticatedQiitaUserResponse> => {
  return await requestToAuthenticatedQiitaUserApi(request);
};
