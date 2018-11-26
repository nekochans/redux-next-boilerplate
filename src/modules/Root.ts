import actionCreatorFactory, { Action, ActionCreator } from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

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

const initialState: IRootState = {
  title: "🐱(=^・^=)🐱ホーム🐱(=^・^=)🐱",
  isLoggedIn: false
};

export const reducer = reducerWithInitialState(initialState).caseWithAction<
  IPageTransitionRequest
>(rootActions.pageTransition, (state, action) => {
  return {
    ...state,
    title: action.payload.title,
    isLoggedIn: action.payload.isLoggedIn
  };
});

export default reducer;
