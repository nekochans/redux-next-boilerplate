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
      `https://qiita.com/api/v2/users/${request.id}`,
      {
        headers: {
          Authorization: "Bearer d78f582769a5c5ad556e73d495caf1823c75f280"
        }
      }
    )
    .then((axiosResponse: AxiosResponse) => {
      return Promise.resolve(axiosResponse.data);
    })
    .catch((axiosError: AxiosError) => {
      return Promise.reject(axiosError);
    });
};
