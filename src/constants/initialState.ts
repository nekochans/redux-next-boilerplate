import { IRootState } from "../modules/Root";
import { ICounterState } from "../modules/Counter";
import { IQiitaState } from "../modules/Qiita";
import { IMyState } from "../modules/My";
import { isLoggedIn } from "../domain/Auth";

const rootState: IRootState = {
  title: "🐱(=^・^=)🐱ホーム🐱(=^・^=)🐱",
  isLoggedIn: isLoggedIn()
};

const counterState: ICounterState = {
  count: 0
};

const qiitaState: IQiitaState = {
  id: "keitakn",
  loading: false
};

const myState: IMyState = {
  loading: false
};

const initialState = {
  root: rootState,
  counter: counterState,
  qiita: qiitaState,
  my: myState
};

export default initialState;
