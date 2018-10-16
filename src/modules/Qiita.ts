import {
  IFetchQiitaUserRequest,
  IFetchQiitaUserResponse,
  IFetchQiitaUserFailureResponse
} from "../domain/Qiita";
import actionCreatorFactory, { Action, ActionCreator } from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

export enum QiitaActionType {
  post_fetch_user_request = "POST_FETCH_USER_REQUEST",
  fetch_user_success = "FETCH_USER_SUCCESS",
  fetch_user_failure = "FETCH_USER_FAILURE"
}

export interface IMeta {
  loading: boolean;
}

const actionCreator = actionCreatorFactory();

export type QiitaAction =
  | Action<IFetchQiitaUserRequest>
  | Action<IFetchQiitaUserResponse>
  | Action<IFetchQiitaUserFailureResponse>;

const postFetchUserRequest = actionCreator<IFetchQiitaUserRequest>(
  QiitaActionType.post_fetch_user_request,
  { loading: true },
  false
);
const fetchUserSuccess = actionCreator<IFetchQiitaUserResponse>(
  QiitaActionType.fetch_user_success,
  { loading: false },
  false
);
const fetchUserFailure = actionCreator<IFetchQiitaUserFailureResponse>(
  QiitaActionType.fetch_user_failure,
  { loading: false },
  true
);

interface IQiitaActions {
  postFetchUserRequest: ActionCreator<IFetchQiitaUserRequest>;
  fetchUserSuccess: ActionCreator<IFetchQiitaUserResponse>;
  fetchUserFailure: ActionCreator<IFetchQiitaUserFailureResponse>;
}

export const qiitaActions: IQiitaActions = {
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

export const reducer = reducerWithInitialState(initialState)
  .caseWithAction<IFetchQiitaUserRequest>(
    qiitaActions.postFetchUserRequest,
    (state, action) => {
      return {
        ...state,
        id: action.payload.id,
        loading: action.meta["loading"]
      };
    }
  )
  .caseWithAction<IFetchQiitaUserResponse>(
    qiitaActions.fetchUserSuccess,
    (state, action) => {
      return {
        ...state,
        user: action.payload,
        loading: action.meta["loading"]
      };
    }
  )
  .caseWithAction<IFetchQiitaUserFailureResponse>(
    qiitaActions.fetchUserFailure,
    (state, action) => {
      return {
        ...state,
        error: action.payload.error,
        loading: action.meta["loading"]
      };
    }
  );

export default reducer;
