import React from "react";
import { ICounterState, counterActions } from "../modules/Counter";
import { Dispatch } from "redux";
import { ReduxAction } from "../store";
import styled from "styled-components";
import "../styles/style.scss";

interface IProps {
  value: ICounterState;
  actions: Dispatch<ReduxAction>;
}

const CountResult = styled("div").attrs({ className: "content" })`
  font-size: 200%;
`;
const IncrementButton = styled("button").attrs({
  className: "button is-info"
})``;
const DecrementButton = styled("button").attrs({
  className: "button is-danger"
})``;

export const Counter: React.SFC<IProps> = (props: IProps) => {
  const incrementClickHandler = () => {
    props.actions(counterActions.postIncrementRequest({}));
  };
  const decrementClickHandler = () => {
    props.actions(counterActions.postDecrementRequest({}));
  };

  return (
    <>
      <CountResult>🐱 {props.value.count} 🐱</CountResult>
      <IncrementButton onClick={incrementClickHandler}>
        increment
      </IncrementButton>
      <DecrementButton onClick={decrementClickHandler}>
        decrement
      </DecrementButton>
    </>
  );
};

export default Counter;
