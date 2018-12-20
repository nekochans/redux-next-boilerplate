import { createStore, combineReducers, applyMiddleware } from "redux";
import counter, { CounterAction, ICounterState } from "./modules/Counter";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootSaga from "./middlewares/saga";
import qiita, { IQiitaState, QiitaAction } from "./modules/Qiita";
import my, { IMyState, MyAction } from "./modules/My";
import root, { IRootState, RootAction } from "./modules/Root";
import initialState from "./constants/initialState";

const sagaMiddleware = createSagaMiddleware();

export interface IReduxState {
  root: IRootState;
  counter: ICounterState;
  qiita: IQiitaState;
  my: IMyState;
}

export type ReduxAction = CounterAction | QiitaAction | MyAction | RootAction;

export const configureStore = (state = initialState) => {
  const store: any = createStore(
    combineReducers({
      root,
      counter,
      qiita,
      my
    }),
    state,
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
