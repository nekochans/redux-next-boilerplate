import React from "react";
import { ReduxAction } from "../store";
import { IQiitaState, qiitaActions } from "../modules/Qiita";
import { Dispatch } from "redux";
import QiitaUser from "./QiitaUser";
import { compose, withState, withHandlers, pure } from "recompose";

interface IProps {
  actions: Dispatch<ReduxAction>;
  value: IQiitaState;
  userId: string;
  updateUserId: (userId: string) => {};
  handleSubmit: () => {};
  handleChange: () => {};
}

const QiitaUserForm: React.SFC<IProps> = (props: IProps) => {
  return (
    <>
      <form method="post" onSubmit={props.handleSubmit}>
        <label>userId: </label>
        <input type="text" name="id" onChange={props.handleChange} />
        <button type="submit" value="Submit">
          送信
        </button>
      </form>
      {props.value.user ? <QiitaUser value={props.value} /> : ""}
    </>
  );
};

const enhancer = compose(
  withState("userId", "updateUserId", ""),
  withHandlers({
    handleChange: (props: IProps) => (
      event: React.ChangeEvent<{ value: string }>
    ) => {
      props.updateUserId(event.target.value);
    },
    handleSubmit: (props: IProps) => (event: React.FormEvent) => {
      event.preventDefault();
      props.actions(qiitaActions.postFetchUserRequest({ id: props.userId }));
    }
  }),
  pure
);

export default enhancer(QiitaUserForm);
