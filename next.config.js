// next.config.js
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ moved out of experimental: fix warning
  outputFileTracingRoot: path.join(__dirname),

  // ✅ images allowlist
  images: {
    remotePatterns: [
      { protocol: "https", hostname: " myads.dev", pathname: "/**" },
      { protocol: "https", hostname: "www. myads.dev", pathname: "/**" },
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/**" },
      { protocol: "https", hostname: "www. myads.dev", pathname: "/**" },
      { protocol: "https", hostname: " myads.dev", pathname: "/**" }
    ],
    formats: ["image/avif", "image/webp"],
  },

  // perf
  reactStrictMode: true,
  compress: true,
};

module.exports = nextConfig;
