import { takeLatest, call, put } from "redux-saga/effects";
import { CounterAction, counterActions } from "../modules/Counter";

const sleep = microSecond =>
  new Promise(resolve => setTimeout(resolve, microSecond));

function* asyncIncrement(action: CounterAction) {
  console.log(action);
  yield call(sleep, 500);
  yield put(counterActions.increment());
}

function* asyncDecrement(action: CounterAction) {
  console.log(action);
  yield sleep(500);
  yield put(counterActions.decrement());
}

function* rootSaga() {
  // TODO ActionTypeはエクスポートして使えるようにしたほうが良い
  yield takeLatest("POST_INCREMENT_REQUEST", asyncIncrement);
  yield takeLatest("POST_DECREMENT_REQUEST", asyncDecrement);
}

export default rootSaga;
