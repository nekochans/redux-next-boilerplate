import express from "express";
import next from "next";

const app = (next: next.Server): express.Express => {
  const app = express();
  const handle = next.getRequestHandler();
  app.enable("strict routing");

  app.get('/api/json', (req: express.Request, res: express.Response) => {
    return res.json({ id: req.ip, message: "🐱二匹" });
  });

  // SPA のデフォルトルーティング
  app.get("*", (req: express.Request, res: express.Response) => {
    return handle(req, res);
  });

  return app;
};

export default app;
