import React from "react";
import { ReduxAction } from "../store";
import { IQiitaState } from "../modules/Qiita";
import { Dispatch } from "redux";
import QiitaContainer from "../containers/Qiita";
import { NextContext } from "next";
import { qiitaActions } from "../modules/Qiita";

interface IProps {
  actions: Dispatch<ReduxAction>;
  value: IQiitaState;
}

export default class Qiita extends React.Component<IProps> {
  static async getInitialProps(ctx: NextContext) {
    if (ctx.err != null) {
      // TODO 何らかのError処理を行う
    }

    const request = {
      id: "keitakn"
    };

    ctx.store.dispatch(qiitaActions.postFetchUserRequest(request));

    return { isServer: ctx.isServer };
  }

  render() {
    return (
      <>
        <QiitaContainer value={this.props.value} actions={this.props.actions} />
      </>
    );
  }
}
