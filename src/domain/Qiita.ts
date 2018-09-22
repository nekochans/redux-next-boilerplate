// TODO APIサーバへ通信する場所はここではないどこかへ移動させる
import axios, { AxiosResponse, AxiosError } from "axios";

export interface IFetchQiitaUserRequest {
  id: string;
}

export interface IFetchQiitaUserResponse {
  id: string;
  profile_image_url: string;
}

export interface IFetchQiitaUserFailureResponse {
  // TODO このErrorは独自定義のErrorにするべき
  error: Error;
}

export const fetchUser = async (
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
