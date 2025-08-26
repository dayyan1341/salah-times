
import type { NextConfig } from "next";
import { withPWA } from "next-pwa";

const baseConfig: NextConfig = {
  // ...other Next.js config options
};

const pwaOptions = {
  dest: "public",
  register: true,
  skipWaiting: true,
};

// Apply next-pwa only for production builds so Turbopack (dev) isn't affected by webpack-only plugins.
const nextConfig: NextConfig =
  process.env.NODE_ENV === "production"
    ? (withPWA(pwaOptions) as any)(baseConfig)
    : baseConfig;

export default nextConfig;
