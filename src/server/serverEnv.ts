export const qiitaClientId = (): string => {
  return typeof process.env.QIITA_CLIENT_ID === "string"
    ? process.env.QIITA_CLIENT_ID
    : "";
};

export const qiitaClientSecret = (): string => {
  return typeof process.env.QIITA_CLIENT_SECRET === "string"
    ? process.env.QIITA_CLIENT_SECRET
    : "";
};
