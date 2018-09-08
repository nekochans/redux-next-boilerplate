import { createStore, combineReducers, applyMiddleware } from "redux";
import counter, { CounterAction, ICounterState } from "./modules/Counter";
import { Action } from "redux-actions";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./middlewares/saga";

const sagaMiddleware = createSagaMiddleware();

export interface IReduxState {
  counter: ICounterState;
}

export type ReduxAction = CounterAction | Action<any>;

export const configureStore = (initialState = { counter: { count: 0 } }) => {
  const store = createStore(
    combineReducers({
      counter
    }),
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();

  return store;
};

export default configureStore;
