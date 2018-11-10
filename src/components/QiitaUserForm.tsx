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
        <div className="field">
          <label className="label">userId</label>
          <div className="control">
            <input
              name="id"
              className="input"
              type="text"
              placeholder="QiitaのユーザーIDを入れて下さい"
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-link">
              Submit
            </button>
          </div>
        </div>
      </form>
      {props.value.user ? <QiitaUser value={props.value} /> : ""}
    </>
  );
};

const enhance = compose(
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

export default enhance(QiitaUserForm);
