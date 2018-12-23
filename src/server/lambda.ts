import lambda from "aws-lambda";
import awsServerlessExpress from "aws-serverless-express";
import next from "next";
import app from "./app";

const appNext = next({ dir: "./src", dev: false });

const binaryMimeTypes = [
  "application/javascript",
  "application/json",
  "application/octet-stream",
  "application/xml",
  "font/eot",
  "font/opentype",
  "font/otf",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "text/comma-separated-values",
  "text/css",
  "text/html",
  "text/javascript",
  "text/plain",
  "text/text",
  "text/xml"
];

const server = awsServerlessExpress.createServer(
  app(appNext),
  undefined,
  binaryMimeTypes
);

const isWarmupRequest = (event: any): boolean => {
  if (!("source" in event)) {
    return false;
  }

  return event.source === "serverless-plugin-warmup";
};

const createWarmupResponse = (): lambda.ProxyResult => {
  return {
    statusCode: 200,
    body: ""
  };
};

module.exports.handler = (
  event: lambda.APIGatewayEvent,
  context: lambda.Context,
  callback: lambda.Callback
) => {
  if (isWarmupRequest(event)) {
    return callback(undefined, createWarmupResponse());
  }

  appNext.prepare().then(() => {
    return awsServerlessExpress.proxy(server, event, context);
  });
};
