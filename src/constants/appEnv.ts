export const appUrl = (): string => {
  return typeof process.env.APP_URL === "string" ? process.env.APP_URL : "";
};
