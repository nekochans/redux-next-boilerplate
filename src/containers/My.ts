import { Dispatch } from "redux";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import QiitaUser from "../components/QiitaUser";
import { IReduxState, ReduxAction } from "../store";
import { IMyState } from "../modules/My";

const mapStateToProps: MapStateToProps<{ value: IMyState }, any, any> = (
  state: IReduxState
) => {
  return {
    value: state.my
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
)(QiitaUser);
