import Link from "next/link";

export default () => {
  return (
    <>
      Hello World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
    </>
  );
};
