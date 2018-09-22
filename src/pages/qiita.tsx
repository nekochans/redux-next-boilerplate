import React from "react";
import { ReduxAction } from "../store";
import { IQiitaState, qiitaActions } from "../modules/Qiita";
import { Dispatch } from "redux";
import QiitaContainer from "../containers/Qiita";
import { NextContext } from "next";

interface IProps {
  actions: Dispatch<ReduxAction>;
  value: IQiitaState;
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

    ctx.store.dispatch(qiitaActions.postFetchUserRequest(request));
  }

  render() {
    return (
      <>
        <QiitaContainer value={this.props.value} actions={this.props.actions} />
      </>
    );
  }
}
