import React from "react";
import { ReduxAction } from "../store";
import { IQiitaState, qiitaActions } from "../modules/Qiita";
import { Dispatch } from "redux";
import QiitaUser from "./QiitaUser";

interface IProps {
  actions: Dispatch<ReduxAction>;
  value: IQiitaState;
}

export default class Qiita extends React.Component<IProps> {
  private userId: string;

  constructor(props: IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.userId = "";
  }

  handleChange(event: React.ChangeEvent<{ value: string }>) {
    this.userId = event.target.value;
  }

  handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    this.props.actions(qiitaActions.postFetchUserRequest({ id: this.userId }));
  }

  render() {
    return (
      <>
        <form method="post" onSubmit={this.handleSubmit}>
          <label>userId: </label>
          <input type="text" name="id" onChange={this.handleChange} />
          <button type="submit" value="Submit">
            送信
          </button>
        </form>
        {this.props.value.user ? <QiitaUser value={this.props.value} /> : ""}
      </>
    );
  }
}
