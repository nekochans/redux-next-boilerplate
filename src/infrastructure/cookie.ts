import { NextContext } from "next";
import Cookies from "universal-cookie";

const cookies = (ctx: NextContext): Cookies => {
  if (ctx.req) {
    const { cookie = {} } = ctx.req.headers;
    return new Cookies(cookie);
  }

  return new Cookies();
};

export const fetchFromCookie = (ctx: NextContext, key: string): string => {
  return cookies(ctx).get(key);
};
