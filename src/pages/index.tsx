import React from "react";
import { NextContext } from "next";
import { compose, pure, setStatic } from "recompose";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { rootActions } from "../modules/Root";
import { isLoggedIn } from "../domain/Auth";
import { IReduxState } from "../store";

interface IProps {
  value: IReduxState;
}

const IndexPage: React.SFC<IProps> = (props: IProps) => {
  return (
    <>
      <Navbar value={props.value} />
      <Title title={props.value.root.title} />
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
      title: "🐱(=^・^=)🐱ホーム🐱(=^・^=)🐱",
      isLoggedIn: isLoggedIn(ctx)
    };

    ctx.store.dispatch(rootActions.pageTransition(pageProps));

    const containerProps = {
      actions: ctx.store.dispatch,
      value: ctx.store.getState()
    };

    return Object.assign(pageProps, containerProps);
  }),
  pure
);

export default enhance(IndexPage);
