import reducer, { counterActions } from "../../../src/modules/Counter";

describe("src/modules/Counter", () => {
  it("should be able to increment counter", () => {
    const state = {
      count: 1
    };

    const newState = reducer(state, counterActions.increment());
    expect(newState.count).toBe(2);
  });

  it("should be able to increment counter", () => {
    const state = {
      count: 1
    };

    const newState = reducer(state, counterActions.decrement());
    expect(newState.count).toBe(0);
  });
});
