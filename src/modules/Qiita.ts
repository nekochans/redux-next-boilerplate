import { ActionMeta } from "redux-actions";
import {
  IFetchQiitaUserRequest,
  IFetchQiitaUserResponse,
  IFetchQiitaUserFailureResponse
} from "../domain/qiita/Qiita";

enum ActionType {
  post_fetch_user_request = "POST_FETCH_USER_REQUEST",
  fetch_user_success = "FETCH_USER_SUCCESS",
  fetch_user_failure = "FETCH_USER_FAILURE"
}

export interface IMeta {
  loading: boolean;
}

export type QiitaAction =
  | ActionMeta<IFetchQiitaUserRequest, IMeta>
  | ActionMeta<IFetchQiitaUserResponse, IMeta>
  | ActionMeta<IFetchQiitaUserFailureResponse, IMeta>;

const postFetchUserRequest = (request: IFetchQiitaUserRequest): QiitaAction => {
  return {
    type: ActionType.post_fetch_user_request,
    payload: request,
    error: false,
    meta: { loading: true }
  };
};

const fetchUserSuccess = (response: IFetchQiitaUserResponse): QiitaAction => {
  return {
    type: ActionType.fetch_user_success,
    payload: response,
    error: false,
    meta: { loading: false }
  };
};

const fetchUserFailure = (
  response: IFetchQiitaUserFailureResponse
): QiitaAction => {
  return {
    type: ActionType.fetch_user_failure,
    payload: response,
    error: true,
    meta: { loading: false }
  };
};

export const qiitaActions = {
  postFetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
};

export interface IQiitaState {
  id: string;
  loading: boolean;
  // TODO このany型は後でちゃんと型定義する
  user?: any;
  error?: any;
}

const initialState: IQiitaState = {
  id: "keitakn",
  loading: false
};

export const reducer = (
  state: IQiitaState = initialState,
  action: QiitaAction
): IQiitaState => {
  switch (action.type) {
    case ActionType.post_fetch_user_request:
      return {
        ...state,
        id: action.payload["id"],
        loading: action.meta.loading
      };
    case ActionType.fetch_user_success:
      return {
        ...state,
        loading: action.meta.loading,
        user: action.payload
      };
    case ActionType.fetch_user_failure:
      return {
        ...state,
        loading: action.meta.loading,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
