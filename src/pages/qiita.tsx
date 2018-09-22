import React from "react";
import { ReduxAction } from "../store";
import { IQiitaState, qiitaActions } from "../modules/Qiita";
import { Dispatch } from "redux";
import QiitaContainer from "../containers/Qiita";
import { NextContext } from "next";
import { fetchUser } from "../domain/Qiita";

interface IProps {
  actions: Dispatch<ReduxAction>;
  value: IQiitaState;
  isServer: boolean;
}

export default class Qiita extends React.Component<IProps> {
  static async getInitialProps(ctx: NextContext) {
    const { err, isServer } = ctx;
    if (err != null) {
      // TODO 何らかのError処理を行う
    }

    if (!isServer) {
      return;
    }

    const request = {
      id: "keitakn"
    };

    const user = await fetchUser(request);

    ctx.store.dispatch(qiitaActions.fetchUserSuccess(user));
  }

  render() {
    return (
      <>
        <QiitaContainer value={this.props.value} actions={this.props.actions} />
      </>
    );
  }
}
