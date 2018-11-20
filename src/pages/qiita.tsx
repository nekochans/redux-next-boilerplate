import React from "react";
import { ReduxAction } from "../store";
import { IQiitaState, qiitaActions } from "../modules/Qiita";
import { Dispatch } from "redux";
import QiitaContainer from "../containers/Qiita";
import { NextContext } from "next";
import { compose, setStatic, pure } from "recompose";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchFromCookie } from "../infrastructure/cookie";

interface IProps {
  actions: Dispatch<ReduxAction>;
  value: IQiitaState;
  isLoggedIn: boolean;
}

const QiitaPage: React.SFC<IProps> = (props: IProps) => {
  return (
    <>
      <Navbar {...props} />
      <QiitaContainer value={props.value} actions={props.actions} />
      <Footer />
    </>
  );
};

const enhance = compose(
  setStatic("getInitialProps", async (ctx: NextContext) => {
    const { err, isServer } = ctx;
    if (err != null) {
      // TODO 何らかのError処理を行う
    }

    const accessToken = fetchFromCookie(ctx, "accessToken");
    const isLoggedIn = accessToken != null;

    const pageProps = {
      title: "🐱Qiita ユーザー検索🐱",
      isLoggedIn
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

export default enhance(QiitaPage);
