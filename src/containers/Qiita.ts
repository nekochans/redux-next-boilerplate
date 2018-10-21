import { Dispatch } from "redux";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import QiitaUserForm from "../components/QiitaUserForm";
import { IReduxState, ReduxAction } from "../store";
import { IQiitaState } from "../modules/Qiita";

const mapStateToProps: MapStateToProps<{ value: IQiitaState }, any, any> = (
  state: IReduxState
) => {
  return {
    value: state.qiita
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
)(QiitaUserForm);
