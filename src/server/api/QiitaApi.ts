import axios, { AxiosError, AxiosResponse } from "axios";
import {
  IFetchAuthenticatedQiitaUserRequest,
  IFetchQiitaUserRequest,
  IFetchQiitaUserResponse,
  IFetchAuthenticatedQiitaUserResponse
} from "../../domain/Qiita";

export const requestToQiitaUserApi = async (
  request: IFetchQiitaUserRequest
): Promise<IFetchQiitaUserResponse> => {
  return axios
    .get<IFetchQiitaUserResponse>(
      `https://qiita.com/api/v2/users/${request.id}`
    )
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
    .get<IFetchAuthenticatedQiitaUserResponse>(
      "https://qiita.com/api/v2/authenticated_user",
      { headers: { Authorization: `Bearer ${request.accessToken}` } }
    )
    .then((axiosResponse: AxiosResponse) => {
      return Promise.resolve(axiosResponse.data);
    })
    .catch((axiosError: AxiosError) => {
      return Promise.reject(axiosError);
    });
};
