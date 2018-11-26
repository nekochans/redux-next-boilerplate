import { NextContext } from "next";
import Cookies from "universal-cookie";

export const cookies = (ctx?: NextContext): Cookies => {
  if (ctx === undefined) {
    return new Cookies();
  }

  if (ctx.req) {
    const { cookie = {} } = ctx.req.headers;
    return new Cookies(cookie);
  }

  return new Cookies();
};

export const fetchFromCookie = (key: string, ctx?: NextContext): string => {
  return cookies(ctx).get(key);
};
