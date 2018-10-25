import React from "react";
import { NextContext } from "next";
import Link from "next/link";
import { compose, pure, setStatic } from "recompose";

const IndexPage: React.SFC = () => {
  return (
    <>
      <h1>🐱(=^・^=)🐱(=^・^=)🐱(=^・^=)🐱</h1>
      <ul>
        <li>
          <Link href="/counter">
            <a>counter</a>
          </Link>
        </li>
        <li>
          <Link href="/qiita">
            <a>qiita</a>
          </Link>
        </li>
      </ul>
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
