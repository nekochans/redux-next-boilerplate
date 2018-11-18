import actionCreatorFactory, { Action, ActionCreator } from "typescript-fsa";
import {
  IFetchAuthenticatedQiitaUserRequest,
  IFetchAuthenticatedQiitaUserFailureResponse,
  IFetchAuthenticatedQiitaUserResponse
} from "../domain/Qiita";
import { reducerWithInitialState } from "typescript-fsa-reducers";

export enum MyActionType {
  post_fetch_authenticated_user_request = "POST_FETCH_AUTHENTICATED_USER_REQUEST",
  fetch_authenticated_user_success = "FETCH_AUTHENTICATED_USER_SUCCESS",
  fetch_authenticated_user_failure = "FETCH_AUTHENTICATED_USER_FAILURE"
}

export interface IMeta {
  loading: boolean;
}

const actionCreator = actionCreatorFactory();

export type MyAction =
  | Action<IFetchAuthenticatedQiitaUserRequest>
  | Action<IFetchAuthenticatedQiitaUserResponse>
  | Action<IFetchAuthenticatedQiitaUserFailureResponse>;

const postFetchAuthenticatedUserRequest = actionCreator<
  IFetchAuthenticatedQiitaUserRequest
>(MyActionType.post_fetch_authenticated_user_request, { loading: true }, false);

const fetchAuthenticatedUserSuccess = actionCreator<
  IFetchAuthenticatedQiitaUserResponse
>(MyActionType.fetch_authenticated_user_success, { loading: false }, false);

const fetchAuthenticatedUserFailure = actionCreator<
  IFetchAuthenticatedQiitaUserFailureResponse
>(MyActionType.fetch_authenticated_user_failure, { loading: false }, true);

interface IMyActions {
  postFetchAuthenticatedUserRequest: ActionCreator<
    IFetchAuthenticatedQiitaUserRequest
  >;
  fetchAuthenticatedUserSuccess: ActionCreator<
    IFetchAuthenticatedQiitaUserResponse
  >;
  fetchAuthenticatedUserFailure: ActionCreator<
    IFetchAuthenticatedQiitaUserFailureResponse
  >;
}

export const myActions: IMyActions = {
  postFetchAuthenticatedUserRequest,
  fetchAuthenticatedUserSuccess,
  fetchAuthenticatedUserFailure
};

export interface IMyState {
  loading: boolean;
  user?: IFetchAuthenticatedQiitaUserResponse;
  error?: any;
}

const initialState: IMyState = {
  loading: false
};

export const reducer = reducerWithInitialState(initialState)
  .caseWithAction(
    myActions.postFetchAuthenticatedUserRequest,
    (state, action) => {
      return {
        ...state,
        loading: action.meta["loading"]
      };
    }
  )
  .caseWithAction<IFetchAuthenticatedQiitaUserResponse>(
    myActions.fetchAuthenticatedUserSuccess,
    (state, action) => {
      return {
        ...state,
        user: action.payload,
        loading: action.meta["loading"]
      };
    }
  )
  .caseWithAction<IFetchAuthenticatedQiitaUserFailureResponse>(
    myActions.fetchAuthenticatedUserFailure,
    (state, action) => {
      return {
        ...state,
        error: action.payload.error,
        loading: action.meta["loading"]
      };
    }
  );

export default reducer;
