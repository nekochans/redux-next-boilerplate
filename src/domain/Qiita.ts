import { requestToQiitaUserApi } from "../api/QiitaApi";
import url from "url";

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

export interface ICreateAuthorizationUrlParams {
  client_id: string;
  state: string;
}

export const fetchUser = async (
  request: IFetchQiitaUserRequest
): Promise<IFetchQiitaUserResponse> => {
  return await requestToQiitaUserApi(request);
};

export const createAuthorizationUrl = (
  params: ICreateAuthorizationUrlParams
): string => {
  return url.format({
    protocol: "https",
    host: "qiita.com",
    pathname: "/api/v2/oauth/authorize",
    query: {
      client_id: params.client_id,
      scope: "read_qiita",
      state: params.state
    }
  });
};
