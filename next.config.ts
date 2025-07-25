import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
};

export default nextConfig;
