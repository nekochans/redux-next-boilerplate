import React from "react";
import { ICounterState } from "../modules/Counter";
import Counter, { ActionDispatcher } from "../containers/Counter";

interface IProps {
  value: ICounterState;
  actions: ActionDispatcher;
}

export const CounterPage: React.SFC<IProps> = (props: IProps) => {
  return (
    <>
      <Counter actions={props.actions} value={props.value} />
    </>
  );
};

export default CounterPage;
