import React from "react";
import { ICounterState, counterActions } from "../modules/Counter";
import { Dispatch } from "redux";
import { ReduxAction } from "../store";

interface IProps {
  value: ICounterState;
  actions: Dispatch<ReduxAction>;
}

export const Counter: React.SFC<IProps> = (props: IProps) => {
  const incrementClickHandler = () => {
    props.actions(counterActions.postIncrementRequest({}));
  };
  const decrementClickHandler = () => {
    props.actions(counterActions.postDecrementRequest({}));
  };

  return (
    <>
      <p>{props.value.count}</p>
      <button onClick={incrementClickHandler}>increment!</button>
      <button onClick={decrementClickHandler}>decrement!</button>
    </>
  );
};

export default Counter;
