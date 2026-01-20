import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: [
      "https://9000-firebase-emotres-1768892528715.cluster-ikslh4rdsnbqsvu5nw3v4dqjj2.cloudworkstations.dev",
    ],
  },
};

export default nextConfig;
