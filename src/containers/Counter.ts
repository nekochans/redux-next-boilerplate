import { ICounterState } from "../modules/Counter";
import { Dispatch } from "redux";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import Counter from "../components/Counter";
import { IReduxState, ReduxAction } from "../store";

const mapStateToProps: MapStateToProps<
  { counterState: ICounterState },
  any,
  any
> = (state: IReduxState) => {
  return {
    counterState: state.counter
  };
};

const mapDispatchToProps: MapDispatchToProps<
  { dispatch: Dispatch<ReduxAction> },
  {}
> = (dispatch: Dispatch<ReduxAction>) => {
  return {
    dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
