import React from "react";
import Link from "next/link";

const MyPageButton: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Link href="/my">
        <a className="button is-primary">
          <strong>MyPage</strong>
        </a>
      </Link>
    </>
  );
};

export default MyPageButton;
