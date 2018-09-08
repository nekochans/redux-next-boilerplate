import React from "react";
import { ICounterState, counterActions } from "../modules/Counter";
import { Dispatch } from "redux";
import { ReduxAction } from "../store";

interface IProps {
  counterState: ICounterState;
  dispatch: Dispatch<ReduxAction>;
}

export const Counter: React.SFC<IProps> = (props: IProps) => {
  const incrementClickHandler = () => {
    props.dispatch(counterActions.increment());
  };
  const decrementClickHandler = () => {
    props.dispatch(counterActions.decrement());
  };

  return (
    <>
      <p>{props.counterState.count}</p>
      <button onClick={incrementClickHandler}>increment!</button>
      <button onClick={decrementClickHandler}>decrement!</button>
    </>
  );
};

export default Counter;
