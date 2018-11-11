require("dotenv").config();
const Dotenv = require("dotenv-webpack");
const path = require("path");
const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");

const webpackModule = {
  webpack: (config) => {
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true,
      }),
    ];

    return config;
  },
};

module.exports = withTypescript(withSass(webpackModule));
