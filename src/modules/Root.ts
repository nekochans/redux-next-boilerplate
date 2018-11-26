import actionCreatorFactory, { Action, ActionCreator } from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import initialState from "../constants/initialState";

export enum RootActionType {
  page_transition = "PAGE_TRANSITION"
}

const actionCreator = actionCreatorFactory();

interface IPageTransitionRequest {
  title: string;
  isLoggedIn: boolean;
}

export type RootAction = Action<IPageTransitionRequest>;

const pageTransition = actionCreator<IPageTransitionRequest>(
  RootActionType.page_transition
);

interface RootActions {
  pageTransition: ActionCreator<IPageTransitionRequest>;
}

export const rootActions: RootActions = {
  pageTransition
};

export interface IRootState extends IPageTransitionRequest {}

const state: IRootState = initialState.root;

export const reducer = reducerWithInitialState(state).caseWithAction<
  IPageTransitionRequest
>(rootActions.pageTransition, (state, action) => {
  return {
    ...state,
    title: action.payload.title,
    isLoggedIn: action.payload.isLoggedIn
  };
});

export default reducer;
