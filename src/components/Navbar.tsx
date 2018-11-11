import React from "react";
import "../styles/style.scss";
import Link from "next/link";
import LoginButton from "./LoginButton";

// TODO ログイン状態によってログインボタンの表示・非表示を切り替える
export default () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>
        </Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link href="/counter">
              <a className="button is-light">Counter</a>
            </Link>
            <Link href="/qiita">
              <a className="button is-light">Qiita</a>
            </Link>
            <LoginButton />
          </div>
        </div>
      </div>
    </nav>
  );
};
