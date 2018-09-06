import { Action } from "redux-actions";

enum ActionType {
  increment = "INCREMENT",
  decrement = "DECREMENT"
}

export type CounterAction = Action<{}> | Action<{}>;

const increment = (): CounterAction => {
  return {
    type: ActionType.increment,
    payload: {},
    error: false
  };
};
const decrement = (): CounterAction => {
  return {
    type: ActionType.decrement,
    payload: {},
    error: false
  };
};

export const counterActions = { increment, decrement };

export interface ICounterState {
  count: number;
}

const initialState: ICounterState = {
  count: 0
};

export const reducer = (
  state: ICounterState = initialState,
  action: CounterAction
): ICounterState => {
  switch (action.type) {
    case ActionType.increment:
      return {
        ...state,
        count: state.count + 1
      };
    case ActionType.decrement:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

export default reducer;
