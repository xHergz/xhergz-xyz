/** @type {import('next').NextConfig} */

const { version } = require("./package.json");

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
  },
  trailingSlash: true,
  publicRuntimeConfig: {
    version,
  },
};

module.exports = nextConfig;
