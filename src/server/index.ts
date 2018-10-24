import app from "./app";
import next from "next";

const appNext = next({
  dir: "./src",
  dev: process.env.NODE_ENV !== "production"
});
const port = Number(process.env.PORT) || 4000;

appNext.prepare().then(() => {
  app(appNext).listen(port, (err: Error) => {
    if (err) {
      throw err;
    }

    console.log(`> Ready on http://localhost:${port}`);
  });
});
