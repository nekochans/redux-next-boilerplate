import React from "react";
import { ICounterState } from "../modules/Counter";
import CounterContainer , { ActionDispatcher } from "../containers/Counter";

interface IProps {
  counterState: ICounterState;
  actions: ActionDispatcher;
}

export const Counter: React.SFC<IProps> = (props: IProps) => {
  return (
    <>
      <CounterContainer actions={props.actions} value={props.counterState} />
    </>
  );
};

export default Counter;
