import React from "react";
import { ReduxAction } from "../store";
import { IQiitaState } from "../modules/Qiita";
import { Dispatch } from "redux";
import QiitaContainer from "../containers/Qiita";
import { NextContext } from "next";
import { fetchUser } from "../domain/Qiita";
import QiitaUser from "../components/QiitaUser";

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

    const user = await fetchUser(request);

    return {
      value: {
        id: request.id,
        loading: false,
        user
      }
    };
  }

  render() {
    return (
      <>
        <QiitaContainer value={this.props.value} actions={this.props.actions} />
        <QiitaUser value={this.props.value} />
      </>
    );
  }
}
