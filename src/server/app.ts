import express from "express";
import next from "next";
import { requestToQiitaUserApi } from "../api/QiitaApi";
import { AxiosError } from "axios";
import {
  createAuthorizationUrl,
  fetchAuthorizationStateFromStorage
} from "./auth";

const app = (next: next.Server): express.Express => {
  const app = express();
  const handle = next.getRequestHandler();
  app.enable("strict routing");

  // Qiita User APIへのアクセス
  app.get(
    "/api/qiita/users/:id",
    async (req: express.Request, res: express.Response) => {
      const params = req.params;
      await requestToQiitaUserApi(params)
        .then(qiitaUserResponse => {
          return res.status(200).json(qiitaUserResponse);
        })
        .catch((error: AxiosError) => {
          if (error.response === undefined) {
            return res.status(500).json({ message: "Internal Server Error" });
          }

          return res.status(error.response.status).json(error.response.data);
        });
    }
  );

  // Qiitaの認可サーバーへリクエスト
  app.get("/oauth/request", (req: express.Request, res: express.Response) => {
    if (req.hostname !== "localhost") {
      // TODO 接続先のホスト名がアプリケーションのホスト名と一致しない場合はエラーにする
    }

    return res.redirect(301, createAuthorizationUrl());
  });

  // Qiitaの認可サーバーからのコールバック
  app.get("/oauth/callback", (req: express.Request, res: express.Response) => {
    // TODO 後でアクセストークンを取得するように改修する
    console.log(fetchAuthorizationStateFromStorage());
    return res.json({ query: req.query });
  });

  // SPA のデフォルトルーティング
  app.get("*", (req: express.Request, res: express.Response) => {
    return handle(req, res);
  });

  return app;
};

export default app;
