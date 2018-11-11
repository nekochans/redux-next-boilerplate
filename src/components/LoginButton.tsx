import React from "react";
import uuid from "uuid";

const LoginButton: React.SFC<{}> = () => {
  return (
    <>
      <a
        className="button is-primary"
        href={`/oauth/request?uuid=${uuid.v4()}`}
      >
        <strong>Login</strong>
      </a>
    </>
  );
};

export default LoginButton;
