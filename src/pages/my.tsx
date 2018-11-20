import React from "react";
import { compose, setStatic, pure } from "recompose";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MyContainer from "../containers/My";
import { Dispatch } from "redux";
import { ReduxAction } from "../store";
import { IMyState, myActions } from "../modules/My";
import { NextContext } from "next";
import { fetchFromCookie } from "../infrastructure/cookie";
import Router from "next/router";

interface IProps {
  actions: Dispatch<ReduxAction>;
  value: IMyState;
  title: string;
  isLoggedIn: boolean;
}

const MyPage: React.SFC<IProps> = (props: IProps) => {
  return (
    <>
      <Navbar {...props} />
      <MyContainer value={props.value} actions={props.actions} />
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
    if (accessToken == null && !isServer) {
      return await Router.push("/");
    }

    const pageProps = {
      actions: ctx.store.dispatch,
      value: ctx.store.getState(),
      title: "🐱Myアカウント🐱",
      isLoggedIn: true
    };

    ctx.store.dispatch(
      myActions.postFetchAuthenticatedUserRequest({ accessToken })
    );

    return pageProps;
  }),
  pure
);

export default enhance(MyPage);
