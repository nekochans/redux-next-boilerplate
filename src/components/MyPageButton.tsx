import React from "react";

const MyPageButton: React.SFC<{}> = () => {
  return (
    <>
      <a className="button is-primary" href="/my">
        <strong>MyPage</strong>
      </a>
    </>
  );
};

export default MyPageButton;
