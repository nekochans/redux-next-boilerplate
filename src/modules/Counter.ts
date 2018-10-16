import actionCreatorFactory, { Action, ActionCreator } from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

export interface ICounterActionPayload {}

export type CounterAction = Action<ICounterActionPayload>;

const actionCreator = actionCreatorFactory();

const postIncrementRequest = actionCreator<ICounterActionPayload>(
  "POST_INCREMENT_REQUEST"
);
const postDecrementRequest = actionCreator<ICounterActionPayload>(
  "POST_DECREMENT_REQUEST"
);
const increment = actionCreator<ICounterActionPayload>("INCREMENT");
const decrement = actionCreator<ICounterActionPayload>("DECREMENT");

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
