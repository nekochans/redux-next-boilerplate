export namespace QiitaUsers {
  export interface IFetchUserRequest {
    id: string;
  }

  export interface IUserResponse {
    id: string;
    profile_image_url: string;
  }

  export interface IFetchUserFailureResponse {
    // TODO このErrorは独自定義のErrorにするべき
    error: Error;
  }
}
