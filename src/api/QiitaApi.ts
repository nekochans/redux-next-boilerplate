import axios, { AxiosError, AxiosResponse } from "axios";
import {
  IFetchQiitaUserRequest,
  IFetchQiitaUserResponse,
  IFetchAuthenticatedQiitaUserRequest,
  IFetchAuthenticatedQiitaUserResponse
} from "../domain/Qiita";
import { appUrl } from "../constants/appEnv";

export const requestToQiitaUserApi = async (
  request: IFetchQiitaUserRequest
): Promise<IFetchQiitaUserResponse> => {
  return axios
    .get<IFetchQiitaUserResponse>(`${appUrl()}/api/qiita/users/${request.id}`)
    .then((axiosResponse: AxiosResponse) => {
      return Promise.resolve(axiosResponse.data);
    })
    .catch((axiosError: AxiosError) => {
      return Promise.reject(axiosError);
    });
};

export const requestToAuthenticatedQiitaUserApi = async (
  request: IFetchAuthenticatedQiitaUserRequest
): Promise<IFetchAuthenticatedQiitaUserResponse> => {
  return axios
    .post<IFetchAuthenticatedQiitaUserResponse>(
      `${appUrl()}/api/qiita/authenticated_users`,
      request
    )
    .then((axiosResponse: AxiosResponse) => {
      return Promise.resolve(axiosResponse.data);
    })
    .catch((axiosError: AxiosError) => {
      return Promise.reject(axiosError);
    });
};
