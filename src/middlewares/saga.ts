import { takeLatest } from "redux-saga/effects";
import { CounterAction } from "../modules/Counter";

const sleep = microSecond =>
  new Promise(resolve => setTimeout(resolve, microSecond));

function* asyncIncrement(action: CounterAction) {
  console.log(action);
  yield sleep(500);
}

function* asyncDecrement(action: CounterAction) {
  console.log(action);
  yield sleep(500);
}

function* rootSaga() {
  // TODO ActionTypeはエクスポートして使えるようにしたほうが良い
  yield takeLatest("INCREMENT", asyncIncrement);
  yield takeLatest("DECREMENT", asyncDecrement);
}

export default rootSaga;
