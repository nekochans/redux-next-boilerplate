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

interface IProps {
  actions: Dispatch<ReduxAction>;
  value: IMyState;
}

const MyPage: React.SFC<IProps> = (props: IProps) => {
  return (
    <>
      <Navbar />
      <MyContainer value={props.value} actions={props.actions} />
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

    const accessToken = fetchFromCookie(ctx, "accessToken");
    if (accessToken == null) {
    }

    const pageProps = {
      title: "🐱Myアカウント🐱"
    };

    ctx.store.dispatch(
      myActions.postFetchAuthenticatedUserRequest({ accessToken })
    );

    return pageProps;
  }),
  pure
);

export default enhance(MyPage);
