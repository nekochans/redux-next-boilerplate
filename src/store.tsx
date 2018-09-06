import { createStore, combineReducers } from "redux";
import counter, { CounterAction, ICounterState } from "./modules/Counter";
import { Action } from "redux-actions";
import { composeWithDevTools } from "redux-devtools-extension";

export interface IReduxState {
  counter: ICounterState;
}

export type ReduxAction = CounterAction | Action<any>;

export const initStore = (initialState = { counter: { count: 0 } }) => {
  return createStore(
    combineReducers({
      counter
    }),
    initialState,
    composeWithDevTools()
  );
};

export default initStore;
