import React from "react";
import { ReduxAction } from "../store";
import { IQiitaState, qiitaActions } from "../modules/Qiita";
import { Dispatch } from "redux";
import QiitaContainer from "../containers/Qiita";
import { NextContext } from "next";
import { compose, setStatic, pure } from "recompose";

interface IProps {
  actions: Dispatch<ReduxAction>;
  value: IQiitaState;
}

const QiitaPage: React.SFC<IProps> = (props: IProps) => {
  return (
    <>
      <QiitaContainer value={props.value} actions={props.actions} />
    </>
  );
};

const enhancer = compose(
  setStatic("getInitialProps", async (ctx: NextContext) => {
    const { err, isServer } = ctx;
    if (err != null) {
      // TODO 何らかのError処理を行う
    }

    const pageProps = {
      title: "🐱Qiita ユーザー検索🐱"
    };

    if (!isServer) {
      return pageProps;
    }

    const request = {
      id: "keitakn"
    };

    ctx.store.dispatch(qiitaActions.postFetchUserRequest(request));

    return pageProps;
  }),
  pure
);

export default enhancer(QiitaPage);
