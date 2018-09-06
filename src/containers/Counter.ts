import { ICounterState, counterActions } from "../modules/Counter";
import { Dispatch } from "redux";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import Counter from "../components/Counter";
import { IReduxState, ReduxAction } from "../store";

const sleep = microSecond =>
  new Promise(resolve => setTimeout(resolve, microSecond));

export class ActionDispatcher {
  private readonly dispatch: (action: any) => void;

  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  async increment() {
    await sleep(1000);

    this.dispatch(counterActions.increment());

    return;
  }

  async decrement() {
    await sleep(1000);

    this.dispatch(counterActions.decrement());

    return;
  }
}

const mapStateToProps: MapStateToProps<{ value: ICounterState }, any, any> = (
  state: IReduxState
) => {
  return {
    value: state.counter
  };
};

const mapDispatchToProps: MapDispatchToProps<
  { actions: ActionDispatcher },
  {}
> = (dispatch: Dispatch<ReduxAction>) => {
  return {
    actions: new ActionDispatcher(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
