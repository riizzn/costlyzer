import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
      allowedOrigins: ["*"], // or restrict if you want
    },
    
  },
    images: {
    remotePatterns: [
      {
        protocol: 'https',                  // usually https
        hostname: 'm.media-amazon.com',     // domain you want to allow
        pathname: '/**',                    // allow all paths under this host
      },
    ],
  },
};

export default nextConfig;
