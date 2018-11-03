import React from "react";
import { NextContext } from "next";
import { compose, pure, setStatic } from "recompose";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const IndexPage: React.SFC = () => {
  return (
    <>
      <Navbar />
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

    return {
      title: "🐱ホーム画面🐱"
    };
  }),
  pure
);

export default enhance(IndexPage);
