import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { IReduxState } from "../store";

interface IProps {
  value: IReduxState;
  children: React.ReactNode;
}

const Layout = (props: IProps) => {
  return (
    <>
      <Navbar value={props.value} />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
