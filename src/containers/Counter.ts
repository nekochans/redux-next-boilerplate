import { ICounterState } from "../modules/Counter";
import { Dispatch } from "redux";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import Counter from "../components/Counter";
import { IReduxState, ReduxAction } from "../store";

const mapStateToProps: MapStateToProps<{ value: ICounterState }, any, any> = (
  state: IReduxState
) => {
  return {
    value: state.counter
  };
};

const mapDispatchToProps: MapDispatchToProps<
  { actions: Dispatch<ReduxAction> },
  {}
> = (dispatch: Dispatch<ReduxAction>) => {
  return {
    actions: dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
