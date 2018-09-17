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
