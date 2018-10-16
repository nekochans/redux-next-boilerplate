import actionCreatorFactory, { Action, ActionCreator } from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

export enum CounterActionType {
  post_increment_request = "POST_INCREMENT_REQUEST",
  post_decrement_request = "POST_DECREMENT_REQUEST",
  increment = "INCREMENT",
  decrement = "DECREMENT"
}

export interface ICounterActionPayload {}

export type CounterAction = Action<ICounterActionPayload>;

const actionCreator = actionCreatorFactory();

const postIncrementRequest = actionCreator<ICounterActionPayload>(
  CounterActionType.post_increment_request
);
const postDecrementRequest = actionCreator<ICounterActionPayload>(
  CounterActionType.post_decrement_request
);
const increment = actionCreator<ICounterActionPayload>(
  CounterActionType.increment
);
const decrement = actionCreator<ICounterActionPayload>(
  CounterActionType.decrement
);

interface ICounterActions {
  increment: ActionCreator<ICounterActionPayload>;
  decrement: ActionCreator<ICounterActionPayload>;
  postIncrementRequest: ActionCreator<ICounterActionPayload>;
  postDecrementRequest: ActionCreator<ICounterActionPayload>;
}

export const counterActions: ICounterActions = {
  increment,
  decrement,
  postIncrementRequest,
  postDecrementRequest
};

export interface ICounterState {
  count: number;
}

const initialState: ICounterState = {
  count: 0
};

export const reducer = reducerWithInitialState(initialState)
  .case(increment, state => ({
    ...state,
    count: state.count + 1
  }))
  .case(decrement, state => ({
    ...state,
    count: state.count - 1
  }));

export default reducer;
