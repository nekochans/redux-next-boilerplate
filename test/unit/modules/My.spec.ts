import reducer, { myActions } from "../../../src/modules/My";

describe("src/modules/My", () => {
  it("should be able to change to state by postFetchAuthenticatedUserRequest", () => {
    const state = {
      loading: false
    };

    const params = {
      accessToken:
        "ea5d0a593b2655e9568f144fb1826342292f5c6b7d406fda00577b8d1530d8a5"
    };

    const newState = reducer(
      state,
      myActions.postFetchAuthenticatedUserRequest(params)
    );

    expect(newState.loading).toBe(true);
    expect(newState.user).toBe(undefined);
    expect(newState.error).toBe(undefined);
  });

  it("should be able to change to state by fetchAuthenticatedUserSuccess", () => {
    const state = {
      loading: true
    };

    const userResponse = {
      id: "qiita",
      profile_image_url:
        "https://si0.twimg.com/profile_images/2309761038/1ijg13pfs0dg84sk2y0h_normal.jpeg"
    };

    const newState = reducer(
      state,
      myActions.fetchAuthenticatedUserSuccess(userResponse)
    );

    expect(newState.loading).toBe(false);
    expect(newState.user).toBe(userResponse);
    expect(newState.error).toBe(undefined);
  });

  it("should be able to change to state by fetchAuthenticatedUserFailure", () => {
    const state = {
      loading: true
    };

    const userError = new Error("User Not Found");

    const newState = reducer(
      state,
      myActions.fetchAuthenticatedUserFailure({ error: userError })
    );
    expect(newState.loading).toBe(false);
    expect(newState.user).toBe(undefined);
    expect(newState.error).toEqual(userError);
  });
});
