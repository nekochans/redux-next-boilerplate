import { createStore, combineReducers, applyMiddleware } from "redux";
import counter, { CounterAction, ICounterState } from "./modules/Counter";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootSaga from "./middlewares/saga";
import qiita, { IQiitaState, QiitaAction } from "./modules/Qiita";

const sagaMiddleware = createSagaMiddleware();

export interface IReduxState {
  counter: ICounterState;
  qiita: IQiitaState;
}

export type ReduxAction = CounterAction | QiitaAction;

// TODO initialState は定数的な場所で作成するように改修する
export const configureStore = (initialState = { counter: { count: 0 } }) => {
  const store = createStore(
    combineReducers({
      counter,
      qiita
    }),
    initialState,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware),
      applyMiddleware(logger)
    )
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();

  return store;
};

export default configureStore;
