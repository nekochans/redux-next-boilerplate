import { fetchFromCookie } from "../infrastructure/cookie";
import { NextContext } from "next";

export const isLoggedIn = (ctx?: NextContext): boolean => {
  const accessToken = fetchFromCookie("accessToken", ctx);

  return accessToken != null;
};

export const fetchAccessToken = (ctx: NextContext): string => {
  return fetchFromCookie("accessToken", ctx);
};
