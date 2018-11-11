import Cookies from "universal-cookie";

export const saveValueToCookie = (key: string, value: string): void => {
  const cookies = new Cookies();
  cookies.set(key, value, { path: "/", httpOnly: true });
};

export const fetchValueFromCookie = (key: string): string => {
  const cookies = new Cookies();
  return cookies.get(key);
};
