import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // A projekt gyökerének rögzítése (több lockfile miatti figyelmeztetés ellen)
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
