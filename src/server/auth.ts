import uuid from "uuid";
import {
  fetchValueFromCookie,
  saveValueToCookie
} from "../infrastructure/cookie";
import url from "url";
import { qiitaClientId } from "./serverEnv";

export const createAuthorizationState = (): string => {
  return uuid.v4();
};

const saveAuthorizationStateToStorage = (authorizationState: string): void => {
  saveValueToCookie("authorizationState", authorizationState);
};

export const fetchAuthorizationStateFromStorage = (): string => {
  return fetchValueFromCookie("authorizationState");
};

export const createAuthorizationUrl = (): string => {
  const authorizationState = createAuthorizationState();
  saveAuthorizationStateToStorage(authorizationState);

  return url.format({
    protocol: "https",
    host: "qiita.com",
    pathname: "/api/v2/oauth/authorize",
    query: {
      client_id: qiitaClientId(),
      scope: "read_qiita",
      state: authorizationState
    }
  });
};
