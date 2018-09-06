import React from "react";
import { ActionDispatcher } from "../containers/Counter";
import { ICounterState } from "../modules/Counter";

interface IProps {
  value: ICounterState;
  actions: ActionDispatcher;
}

export const Counter: React.SFC<IProps> = (props: IProps) => {
  const incrementClickHandler = async () => {
    await props.actions.increment();
  };
  const decrementClickHandler = async () => {
    await props.actions.decrement();
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
