import React from "react";

const LoginButton: React.SFC<{}> = () => {
  return (
    <>
      <a className="button is-primary" href="/oauth/request">
        <strong>Login</strong>
      </a>
    </>
  );
};

export default LoginButton;
