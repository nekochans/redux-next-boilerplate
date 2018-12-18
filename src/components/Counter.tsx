import React from "react";
import { ICounterState, counterActions } from "../modules/Counter";
import { Dispatch } from "redux";
import { ReduxAction } from "../store";
import styled from "styled-components";
import "../styles/style.scss";
import { compose, withHandlers, pure } from "recompose";

interface IProps {
  value: ICounterState;
  actions: Dispatch<ReduxAction>;
  incrementClickHandler: () => {};
  decrementClickHandler: () => {};
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

export const Counter: React.FunctionComponent<IProps> = (props: IProps) => {
  return (
    <>
      <CountResult>🐱 {props.value.count} 🐱</CountResult>
      <IncrementButton onClick={props.incrementClickHandler}>
        increment
      </IncrementButton>
      <DecrementButton onClick={props.decrementClickHandler}>
        decrement
      </DecrementButton>
    </>
  );
};

const enhance = compose(
  withHandlers({
    incrementClickHandler: (props: IProps) => () => {
      props.actions(counterActions.postIncrementRequest({}));
    },
    decrementClickHandler: (props: IProps) => () => {
      props.actions(counterActions.postDecrementRequest({}));
    }
  }),
  pure
);

export default enhance(Counter);
