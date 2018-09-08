import React from "react";
import { ICounterState } from "../modules/Counter";
import CounterContainer from "../containers/Counter";
import { Dispatch } from "redux";
import { ReduxAction } from "../store";

interface IProps {
  actions: Dispatch<ReduxAction>;
  value: ICounterState;
}

export const Counter: React.SFC<IProps> = (props: IProps) => {
  return (
    <>
      <CounterContainer actions={props.actions} value={props.value} />
    </>
  );
};

export default Counter;
