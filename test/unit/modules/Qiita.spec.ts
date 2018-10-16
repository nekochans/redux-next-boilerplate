import reducer, { qiitaActions } from "../../../src/modules/Qiita";

describe("src/modules/Qiita", () => {
  it("should be able to change to state by postFetchUserRequest", () => {
    const state = {
      id: "keitakn",
      loading: false
    };

    const newState = reducer(
      state,
      qiitaActions.postFetchUserRequest({ id: "qiita" })
    );
    expect(newState.id).toBe("qiita");
    expect(newState.loading).toBe(true);
    expect(newState.user).toBe(undefined);
    expect(newState.error).toBe(undefined);
  });

  it("should be able to change to state by fetchUserSuccess", () => {
    const state = {
      id: "qiita",
      loading: true
    };

    const userResponse = {
      id: "qiita",
      profile_image_url:
        "https://si0.twimg.com/profile_images/2309761038/1ijg13pfs0dg84sk2y0h_normal.jpeg"
    };

    const newState = reducer(
      state,
      qiitaActions.fetchUserSuccess(userResponse)
    );
    expect(newState.id).toBe("qiita");
    expect(newState.loading).toBe(false);
    expect(newState.user).toBe(userResponse);
    expect(newState.error).toBe(undefined);
  });

  it("should be able to change to state by fetchUserFailure", () => {
    const state = {
      id: "qiita",
      loading: true
    };

    const userError = new Error("User Not Found");

    const newState = reducer(
      state,
      qiitaActions.fetchUserFailure({ error: userError })
    );
    expect(newState.id).toBe("qiita");
    expect(newState.loading).toBe(false);
    expect(newState.user).toBe(undefined);
    expect(newState.error).toEqual(userError);
  });
});
