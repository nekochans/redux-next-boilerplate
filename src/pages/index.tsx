import React from "react";
import Link from "next/link";

const Index: React.SFC = () => {
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

export default Index;
