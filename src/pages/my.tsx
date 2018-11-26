import React from "react";
import { compose, setStatic, pure } from "recompose";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MyContainer from "../containers/My";
import { Dispatch } from "redux";
import { IReduxState, ReduxAction } from "../store";
import { myActions } from "../modules/My";
import { NextContext } from "next";
import { fetchAccessToken, isLoggedIn } from "../domain/Auth";
import { rootActions } from "../modules/Root";

interface IProps {
  actions: Dispatch<ReduxAction>;
  value: IReduxState;
}

const MyPage: React.SFC<IProps> = (props: IProps) => {
  return (
    <>
      <Navbar value={props.value} />
      {props.value.root.isLoggedIn ? (
        <MyContainer value={props.value} actions={props.actions} />
      ) : (
        <h2 className="title is-3">🐱ログインを行って下さい🐱</h2>
      )}
      <Footer />
    </>
  );
};

const enhance = compose(
  setStatic("getInitialProps", async (ctx: NextContext) => {
    const { err } = ctx;
    if (err != null) {
      // TODO 何らかのError処理を行う
    }

    const pageProps = {
      title: "🐱Myアカウント🐱",
      isLoggedIn: isLoggedIn(ctx)
    };

    ctx.store.dispatch(rootActions.pageTransition(pageProps));

    ctx.store.dispatch(
      myActions.postFetchAuthenticatedUserRequest({
        accessToken: fetchAccessToken(ctx)
      })
    );

    const containerProps = {
      actions: ctx.store.dispatch,
      value: ctx.store.getState()
    };

    return Object.assign(pageProps, containerProps);
  }),
  pure
);

export default enhance(MyPage);
