import { takeLatest, call, put } from "redux-saga/effects";
import {
  CounterAction,
  counterActions,
  CounterActionType
} from "../modules/Counter";
import { QiitaAction, qiitaActions, QiitaActionType } from "../modules/Qiita";
import { fetchUser, fetchAuthenticatedUser } from "../domain/Qiita";
import { MyAction, myActions, MyActionType } from "../modules/My";

const sleep = microSecond =>
  new Promise(resolve => setTimeout(resolve, microSecond));

function* asyncIncrement(action: CounterAction) {
  console.log(action);
  yield call(sleep, 500);
  yield put(counterActions.increment({}));
}

function* asyncDecrement(action: CounterAction) {
  console.log(action);
  yield sleep(500);
  yield put(counterActions.decrement({}));
}

function* fetchQiitaUser(action: QiitaAction) {
  try {
    const user = yield call(fetchUser, action.payload);
    yield put(qiitaActions.fetchUserSuccess(user));
  } catch (error) {
    yield put(qiitaActions.fetchUserFailure({ error }));
  }
}

function* fetchAuthenticatedQiitaUser(action: MyAction) {
  try {
    const user = yield call(fetchAuthenticatedUser, action.payload);
    yield put(myActions.fetchAuthenticatedUserSuccess(user));
  } catch (error) {
    yield put(myActions.fetchAuthenticatedUserFailure(error));
  }
}

function* rootSaga() {
  yield takeLatest(CounterActionType.post_increment_request, asyncIncrement);
  yield takeLatest(CounterActionType.post_decrement_request, asyncDecrement);
  yield takeLatest(QiitaActionType.post_fetch_user_request, fetchQiitaUser);
  yield takeLatest(
    MyActionType.post_fetch_authenticated_user_request,
    fetchAuthenticatedQiitaUser
  );
}

export default rootSaga;
