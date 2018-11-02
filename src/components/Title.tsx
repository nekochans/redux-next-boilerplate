import React from "react";
import styled from "styled-components";
import "../styles/style.scss";

interface IProps {
  title: string;
}

const Title = styled("h1").attrs({ className: "title" })`
  color: red;
`;

export default (props: IProps) => {
  return <Title>{props.title}</Title>;
};
