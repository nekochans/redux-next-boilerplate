import React from "react";
import { NextContext } from "next";
import { compose, pure, setStatic } from "recompose";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchFromCookie } from "../infrastructure/cookie";

interface IProps {
  isLoggedIn: boolean;
}

const IndexPage: React.SFC<IProps> = (props: IProps) => {
  return (
    <>
      <Navbar {...props} />
      <Title title="🐱(=^・^=)🐱ホーム🐱(=^・^=)🐱" />
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
    const isLoggedIn = accessToken != null;

    return {
      title: "🐱ホーム画面🐱",
      isLoggedIn
    };
  }),
  pure
);

export default enhance(IndexPage);
